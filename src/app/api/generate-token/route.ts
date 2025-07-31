import { NextRequest, NextResponse } from 'next/server';
import { generateSpamProtectionToken } from '@/lib/spam-protection';

export async function GET(request: NextRequest) {
  try {
    // Get client IP from headers
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIP = forwarded ? forwarded.split(',')[0] : 
                     request.headers.get('x-real-ip') || 
                     'unknown';

    const { token, formId } = generateSpamProtectionToken(clientIP);

    return NextResponse.json({
      token,
      formId,
      timestamp: Date.now()
    });

  } catch (error) {
    console.error('Token generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate token' },
      { status: 500 }
    );
  }
}