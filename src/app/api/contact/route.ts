import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log('Contact API route called');
  try {
    const body = await request.json();
    console.log('Request body:', body);
    const { name, email, company, phone, service, deadline, message, ndaRequired } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Sending email via Resend...');

    // Send email to contact@rawseclabs.com
    const emailResponse = await resend.emails.send({
      from: 'contact@rawseclabs.com',
      to: 'contact@rawseclabs.com',
      subject: `New Scoping Request: ${service} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ea5e9; margin-bottom: 20px;">New Scoping Request</h2>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #334155;">Client Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>

          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #334155;">Project Details</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Timeline:</strong> ${deadline}</p>
            <p><strong>NDA Required:</strong> ${ndaRequired ? 'Yes' : 'No'}</p>
          </div>

          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #334155;">Scope & Requirements</h3>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>

          <p style="color: #64748b; font-size: 12px; margin-top: 30px;">
            This inquiry was submitted via the RawSecLabs website contact form.
          </p>
        </div>
      `,
    });

    // Send confirmation email to the client
    await resend.emails.send({
      from: 'contact@rawseclabs.com',
      to: email,
      subject: 'Scoping Inquiry Received - RawSecLabs',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ea5e9; margin-bottom: 20px;">Thank You for Your Inquiry</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have received your scoping request for <strong>${service}</strong> at <strong>${company}</strong>.</p>
          
          <p>A RawSecLabs Principal Security Consultant will review your requirements and reach out to you at <strong>${email}</strong> within 4 business hours with our standard mutual NDA.</p>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Your Request Summary:</strong></p>
            <p style="margin: 5px 0;">Service: ${service}</p>
            <p style="margin: 5px 0;">Timeline: ${deadline}</p>
            <p style="margin: 5px 0;">NDA Required: ${ndaRequired ? 'Yes' : 'No'}</p>
          </div>

          <p>If you have an urgent matter, please contact our emergency email:</p>
          <p style="color: #dc2626; font-weight: bold; font-size: 16px;">
            <a href="mailto:breach@rawseclabs.com" style="color: #dc2626; text-decoration: none;">breach@rawseclabs.com</a>
          </p>
          
          <p style="color: #64748b; font-size: 12px; margin-top: 30px;">
            RawSecLabs - Offensive Security & Adversary Simulation
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data: emailResponse });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
