import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log('Assessment API route called');
  try {
    const body = await request.json();
    console.log('Request body:', body);
    const { email, target, driver, size, estimatedDays } = body;

    // Validate required fields
    if (!email || !target || !driver || !size) {
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
      subject: `Assessment Scoping Inquiry: ${target}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ea5e9; margin-bottom: 20px;">New Assessment Scoping Inquiry</h2>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #334155;">Contact Information</h3>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #334155;">Assessment Details</h3>
            <p><strong>Target:</strong> ${target}</p>
            <p><strong>Compliance Driver:</strong> ${driver}</p>
            <p><strong>Infrastructure Scale:</strong> ${size}</p>
            <p><strong>Estimated Duration:</strong> ${estimatedDays} - ${estimatedDays + 2} Days</p>
          </div>

          <p style="color: #64748b; font-size: 12px; margin-top: 30px;">
            This inquiry was submitted via the RawSecLabs interactive assessment tool.
          </p>
        </div>
      `,
    });

    // Send confirmation email to the client
    await resend.emails.send({
      from: 'contact@rawseclabs.com',
      to: email,
      subject: 'Assessment Scoping Inquiry Received - RawSecLabs',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ea5e9; margin-bottom: 20px;">Assessment Scoping Inquiry Received</h2>
          
          <p>Thank you for using our interactive security scoping engine.</p>
          
          <p>A senior RawSecLabs technical director will review your scope for <strong>${target}</strong> and contact you at <strong>${email}</strong> within 4 business hours.</p>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Your Assessment Summary:</strong></p>
            <p style="margin: 5px 0;">Target: ${target}</p>
            <p style="margin: 5px 0;">Compliance Driver: ${driver}</p>
            <p style="margin: 5px 0;">Infrastructure Scale: ${size}</p>
            <p style="margin: 5px 0;">Estimated Duration: ${estimatedDays} - ${estimatedDays + 2} Days</p>
          </div>

          <p>If you have an urgent matter, please contact our emergency hotline:</p>
          <p style="color: #dc2626; font-weight: bold;">+44 (0) 20 8123 7990 / +1 (800) 492-7321</p>
          
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
