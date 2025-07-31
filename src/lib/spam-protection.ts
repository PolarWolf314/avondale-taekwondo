import { createHmac, randomBytes } from 'crypto';

const SECRET_KEY = process.env.SPAM_PROTECTION_SECRET || 'fallback-secret-key-change-in-production';
const TOKEN_EXPIRY_MINUTES = 30;

export interface SpamProtectionToken {
  timestamp: number;
  formId: string;
  signature: string;
}

export function generateSpamProtectionToken(clientIP?: string): {
  token: string;
  formId: string;
} {
  const timestamp = Date.now();
  const formId = randomBytes(16).toString('hex');
  
  // Create message to sign
  const message = `${timestamp}:${formId}:${clientIP || 'unknown'}`;
  
  // Generate HMAC signature
  const signature = createHmac('sha256', SECRET_KEY)
    .update(message)
    .digest('hex');
  
  // Encode token as base64
  const tokenData: SpamProtectionToken = {
    timestamp,
    formId,
    signature
  };
  
  const token = Buffer.from(JSON.stringify(tokenData)).toString('base64');
  
  return { token, formId };
}

export function validateSpamProtectionToken(
  token: string,
  honeypotValue: string,
  clientIP?: string
): { valid: boolean; error?: string } {
  // Check honeypot first
  if (honeypotValue && honeypotValue.trim() !== '') {
    return { valid: false, error: 'Honeypot field filled' };
  }
  
  try {
    // Decode token
    const tokenData: SpamProtectionToken = JSON.parse(
      Buffer.from(token, 'base64').toString('utf-8')
    );
    
    const { timestamp, formId, signature } = tokenData;
    
    // Check token age
    const now = Date.now();
    const tokenAge = now - timestamp;
    const maxAge = TOKEN_EXPIRY_MINUTES * 60 * 1000;
    
    if (tokenAge > maxAge) {
      return { valid: false, error: 'Token expired' };
    }
    
    if (tokenAge < 2000) { // Less than 2 seconds
      return { valid: false, error: 'Form submitted too quickly' };
    }
    
    // Recreate expected signature
    const message = `${timestamp}:${formId}:${clientIP || 'unknown'}`;
    const expectedSignature = createHmac('sha256', SECRET_KEY)
      .update(message)
      .digest('hex');
    
    // Verify signature
    if (signature !== expectedSignature) {
      return { valid: false, error: 'Invalid token signature' };
    }
    
    return { valid: true };
    
  } catch {
    return { valid: false, error: 'Invalid token format' };
  }
}