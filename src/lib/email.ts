import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendApprovalEmail(to: string, name: string) {
  await transporter.sendMail({
    from: `"Dr. Nakhoda's Skin Institute" <${process.env.SMTP_USER}>`,
    to,
    subject: "Appointment Approved",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #8B5E83;">Appointment Approved</h2>
        <p>Dear ${name},</p>
        <p>Your appointment request has been approved.</p>
        <p>Our clinic will contact you soon with further details.</p>
        <br />
        <p>Warm regards,</p>
        <p><strong>Dr. Nakhoda's Skin Institute</strong></p>
        <p style="color: #999; font-size: 12px;">GPC-11, Rojhan Street, Block-5, Clifton, Karachi</p>
      </div>
    `,
  });
}

export async function sendRejectionEmail(to: string, name: string) {
  await transporter.sendMail({
    from: `"Dr. Nakhoda's Skin Institute" <${process.env.SMTP_USER}>`,
    to,
    subject: "Appointment Update",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #8B5E83;">Appointment Update</h2>
        <p>Dear ${name},</p>
        <p>Unfortunately we cannot process your appointment request at the moment.</p>
        <p>Please contact the clinic for assistance.</p>
        <br />
        <p>Warm regards,</p>
        <p><strong>Dr. Nakhoda's Skin Institute</strong></p>
        <p style="color: #999; font-size: 12px;">Phone: +92-300-2105374 | +92-321-3822113</p>
      </div>
    `,
  });
}
