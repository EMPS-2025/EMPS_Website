import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// Fallback email if environment variables are missing
const fallbackRecipients = ["marketing@energyminds.in"];

const getRecipientEmails = () => {
  const envRecipients =
    process.env.CONTACT_RECIPIENTS ||
    process.env.CONTACT_RECIPIENT_EMAIL ||
    process.env.CONTACT_TO_EMAIL ||
    "";

  const parsed = envRecipients
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  return parsed.length ? parsed : fallbackRecipients;
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, organization, service, message, type } = body;

    // --- DYNAMIC VALIDATION BASED ON TYPE ---
    let missingFields = [];
    const isCompliance = type === "statutory_access";

    if (isCompliance) {
      // Compliance Form Requirements
      const required = ["name", "email"];
      missingFields = required.filter((field) => !body?.[field]);
    } else {
      // Standard Contact Form Requirements
      const required = ["name", "email", "company", "service", "message"];
      missingFields = required.filter((field) => !body?.[field]);
    }

    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({
          error: `Missing required fields: ${missingFields.join(", ")}`,
        }),
        { status: 400 }
      );
    }

    // --- EMAIL CONFIGURATION ---
    const recipients = getRecipientEmails();

    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
      console.error(
        "Email service not configured — missing RESEND_API_KEY or FROM_EMAIL"
      );
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500 }
      );
    }

    // --- DYNAMIC EMAIL CONTENT ---
    let subject = "";
    let htmlContent = "";

    if (isCompliance) {
      // A. Content for Statutory Access
      subject = `[Compliance Access] ${name} viewed Statutory Docs`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #334155;">
          <div style="background: #ecfeff; padding: 20px; border-bottom: 2px solid #06b6d4;">
            <h2 style="color: #0e7490; margin: 0;">Statutory Portal Access</h2>
            <p style="margin: 5px 0 0; font-size: 14px; color: #155e75;">A user has successfully verified their details to access compliance documents.</p>
          </div>
          <div style="padding: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #06b6d4;">${email}</a></p>
            <p><strong>Organization:</strong> ${organization || company || "N/A"}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            <p><strong>System Message:</strong><br>${message || "Access granted to Statutory Requirements page."}</p>
          </div>
          <div style="background: #f8fafc; padding: 15px; font-size: 12px; color: #64748b; text-align: center;">
            Sent automatically from Energy Minds Website (Statutory Gate)
          </div>
        </div>
      `;
    } else {
      // B. Content for Standard Contact Form
      subject = `New Enquiry from ${name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Company:</b> ${company}</p>
          <p><b>Service Interest:</b> ${service}</p>
          <p><b>Message:</b><br>${(message || "").replace(/\n/g, "<br>")}</p>
          <hr>
          <p style="font-size: 0.9em; color: #555;">
            Sent automatically from <b>Energy Minds Website</b>
          </p>
        </div>
      `;
    }

    // --- SEND EMAIL VIA RESEND ---
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: recipients,
      reply_to: email,
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: error.message || "Email sending failed" }),
        { status: 502 }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Message sent successfully",
        id: data?.id,
        to: recipients,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response(
      JSON.stringify({ error: "Unable to process request." }),
      { status: 500 }
    );
  }
}