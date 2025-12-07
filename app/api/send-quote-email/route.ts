import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      contactNumber,
      materialDetails,
      fromLocation,
      toLocation,
      transportDate,
    } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border:1px solid #ddd; padding:20px;">
        <div style="text-align:center;">
          <img src="https://res.cloudinary.com/dcigoid9w/image/upload/v1765126583/vintrella-email-logo_jgvvi7.png" width="150" />
        </div>

        <p>Dear <strong>${fullName}</strong>,</p>

        <p>
          ✅ Thank you for submitting your quote request!  
          Our team will contact you within <strong>24 hours</strong>.
        </p>

        <h3 style="color:#2563eb;">📦 Transport Details</h3>

        <table width="100%" cellpadding="8" style="border-collapse: collapse;">
          <tr>
            <td><strong>Material:</strong></td>
            <td>${materialDetails}</td>
          </tr>
          <tr>
            <td><strong>From:</strong></td>
            <td>${fromLocation}</td>
          </tr>
          <tr>
            <td><strong>To:</strong></td>
            <td>${toLocation}</td>
          </tr>
          <tr>
            <td><strong>Date:</strong></td>
            <td>${transportDate}</td>
          </tr>
          <tr>
            <td><strong>Contact:</strong></td>
            <td>${contactNumber}</td>
          </tr>
        </table>

        <p style="margin-top:20px;">
          If you have any questions, feel free to reply to this email.
        </p>

        <p>
          Regards,<br/>
          <strong>${process.env.NEXT_PUBLIC_COMPANY_NAME}</strong>
        </p>

        <hr/>
        <p style="font-size:12px; color:gray;">
          This is an automated email. Please do not reply directly.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${process.env.NEXT_PUBLIC_COMPANY_NAME}" <${process.env.NEXT_PUBLIC_COMPANY_EMAIL}>`,
      to: email,
      subject: "Quote Request Submitted Successfully",
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
