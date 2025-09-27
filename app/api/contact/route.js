const requiredFields = ['name', 'email', 'company', 'service', 'message'];

export async function POST(request) {
  try {
    const body = await request.json();

    const missingFields = requiredFields.filter((field) => !body?.[field]);
    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({
          error: `Missing required fields: ${missingFields.join(', ')}`,
        }),
        { status: 400 }
      );
    }

    const { name, email, company, service, message } = body;

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.FROM_EMAIL;

    if (!apiKey || !from) {
      console.error('Email service is not configured. Missing RESEND_API_KEY or FROM_EMAIL.');
      return new Response(
        JSON.stringify({
          error: 'Email service is not configured. Please contact the site administrator.',
        }),
        { status: 500 }
      );
    }

    const emailBody = `New contact request from Energy Minds website\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nService Interest: ${service}\n\nMessage:\n${message}`;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: ['marketing@energyminds.in'],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        text: emailBody,
        html: emailBody
          .split('\n')
          .map((line) => `<p>${line || '&nbsp;'}</p>`)
          .join(''),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Resend API error:', response.status, errorBody);
      return new Response(
        JSON.stringify({ error: 'Unable to send message at this time.' }),
        { status: 502 }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Message sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending contact message:', error);
    return new Response(
      JSON.stringify({ error: 'Unable to send message at this time.' }),
      { status: 500 }
    );
  }
}
