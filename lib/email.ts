import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const hasSmtpConfig = Boolean(smtpHost && smtpPort && smtpUser && smtpPass);

const transporter = hasSmtpConfig
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })
  : null;

export async function sendSupportEmail(payload: {
  name: string;
  email: string;
  organization?: string;
  message: string;
  need: string;
}) {
  if (!hasSmtpConfig || !transporter) {
    throw new Error("SMTP configuration is missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.");
  }

  const html = `
    <div>
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Organization:</strong> ${payload.organization || "(none)"}</p>
      <p><strong>Need:</strong> ${payload.need}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message.replace(/\n/g, "<br />")}</p>
    </div>
  `;

  await transporter.sendMail({
    from: `${payload.name} <${payload.email}>`,
    to: "support@skyup.ai",
    subject: `New contact request from ${payload.name}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nOrganization: ${payload.organization || "(none)"}\nNeed: ${payload.need}\nMessage:\n${payload.message}`,
    html,
  });
}
