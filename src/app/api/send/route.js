import LeadEmail from '../../../react-email-starter/emails';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { recipientEmail, cart } = requestBody;

    if (!recipientEmail) {
      throw new Error('Recipient email is required');
    }

    const data = await resend.emails.send({
      from: 'Yash <onboarding@yashsharma.tech>',
      to: [recipientEmail],
      subject: 'Acknowledgment of Your Inquiry',
      react: <LeadEmail recipientEmail={recipientEmail} cart={cart} />,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
