import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const requiredFields = ["name", "email", "company", "service", "message"];
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

    const missingFields = requiredFields.filter((field) => !body?.[field]);
    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({
          error: `Missing required fields: ${missingFields.join(", ")}`,
        }),
        { status: 400 }
      );
    }

    const { name, email, company, service, message } = body;
    const recipients = getRecipientEmails();

    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
      console.error(
        "Email service not configured — missing RESEND_API_KEY or FROM_EMAIL"
      );
      return new Response(
        JSON.stringify({
          error:
            "Email service not configured. Please contact the site administrator.",
        }),
        { status: 500 }
      );
    }

    // Build the email HTML
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222">
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Service Interest:</b> ${service}</p>
        <p><b>Message:</b><br>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="font-size: 0.9em; color: #555;">
          Sent automatically from <b>Energy Minds Website</b>
        </p>
      </div>
    `;

    // ✅ Use Resend SDK
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: recipients,
      reply_to: email,
      subject: `New Enquiry from ${name}`,
      html,
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
    console.error("Error handling contact form:", error);
    return new Response(
      JSON.stringify({ error: "Unable to send message at this time." }),
      { status: 500 }
    );
  }
}
