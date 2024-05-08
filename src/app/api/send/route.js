import LeadEmail from '../../../react-email-starter/emails';
import { Resend } from 'resend';
import { auth } from '@clerk/nextjs';
import ContactEmail from '@/react-email-starter/emails/Contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { recipientEmail, cart, contact, senderEMail, name, email, message } =
      requestBody;

    if (!recipientEmail) {
      throw new Error('Recipient email is required');
    }

    const data = await resend.emails.send({
      from: 'Yash <onboarding@betterside.fun>',
      to: contact ? 'syash5575@gmail.com' : [recipientEmail],
      subject: contact ? 'New lead' : 'Acknowledgment of Your Inquiry',
      react: contact ? (
        <ContactEmail name={name} email={email} message={message} />
      ) : (
        <LeadEmail recipientEmail={recipientEmail} cart={cart} />
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
