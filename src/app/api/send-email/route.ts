import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { validateSpamProtectionToken } from '@/lib/spam-protection';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema for the email request
const emailSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  reason: z.string().min(1),
  date: z.string().optional(),
  message: z.string().min(1).max(500),
  // Spam protection fields
  spamToken: z.string().min(1),
  website: z.string().optional(), // honeypot field
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = emailSchema.parse(body);

    const { name, email, phone, reason, date, message, spamToken, website } = validatedData;

    // Get client IP for spam protection validation
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIP = forwarded ? forwarded.split(',')[0] : 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    // Validate spam protection
    const spamCheck = validateSpamProtectionToken(spamToken, website || '', clientIP);
    if (!spamCheck.valid) {
      console.log('Spam protection triggered:', spamCheck.error);
      return NextResponse.json(
        { error: 'Security validation failed' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailSubject = `New Enquiry: ${reason} - ${name}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
          New Enquiry from Avondale Taekwon-Do Website
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Reason for Contact:</strong> ${reason}</p>
          ${
            date
              ? `<p><strong>Preferred Start Date:</strong> ${new Date(
                  date,
                ).toLocaleDateString("en-NZ", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</p>`
              : ""
          }
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #7c3aed; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
          <p style="margin: 0;"><strong>Sent from:</strong> Avondale Taekwon-Do Website Contact Form</p>
          <p style="margin: 5px 0 0 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString("en-NZ")}</p>
        </div>
      </div>
    `;

    const emailText = `
New Enquiry from Avondale Taekwon-Do Website

Contact Information:
- Name: ${name}
- Email: ${email}
${phone ? `- Phone: ${phone}` : ""}
- Reason for Contact: ${reason}
${date ? `- Preferred Start Date: ${new Date(date).toLocaleDateString("en-NZ")}` : ""}

Message:
${message}

---
Sent from: Avondale Taekwon-Do Website Contact Form
Timestamp: ${new Date().toLocaleString("en-NZ")}
    `;

    // Send the email
    const result = await resend.emails.send({
      from: "Avondale Taekwon-Do <noreply@avondaletkd.guo.nz>",
      to: [process.env.ENQUIRY_EMAIL!],
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Failed to send email", details: result.error },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: result.data?.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

