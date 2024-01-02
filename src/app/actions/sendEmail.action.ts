'use server'
import { EmailTemplate } from "@app/contact/components";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface IRawFormData {
  email: FormDataEntryValue | null;
  subject: FormDataEntryValue | null;
  name: FormDataEntryValue | null;
  message: FormDataEntryValue | null;
}

export default async function sendEmailAction(formData: FormData){
  const {email, subject, name, message}: IRawFormData = {
    email: formData.get('email'),
    subject: formData.get('subject'),
    name: formData.get('name'),
    message: formData.get('message'),
  }
  try {;
    const sendEmail = await resend.emails.send({
      from: email,
      to: process.env.EMAIL_SENT_TO,
      subject: subject,
      react: EmailTemplate({email, name, subject, message}),
    })
    return Response.json(sendEmail);
  } catch (error) {
    return Response.json({error});
  }
}