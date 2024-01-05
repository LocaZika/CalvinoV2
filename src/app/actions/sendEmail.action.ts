'use server'
import { EmailTemplate } from "@app/contact/components";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface IRawFormData {
  email: FormDataEntryValue;
  subject: FormDataEntryValue;
  name: FormDataEntryValue;
  message: FormDataEntryValue;
}

export default async function sendEmailAction(formData: FormData){
  const {email, subject, name, message}: IRawFormData = {
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    name: formData.get('name') as string,
    message: formData.get('message') as string,
  }  
  try {
    await resend.emails.send({
      from: `Contact from <${process.env.EMAIL_SENT_FROM}>`,
      to: process.env.EMAIL_SENT_TO,
      subject: subject,
      reply_to: process.env.EMAIL_SENT_FROM,
      react: EmailTemplate({email, name, subject, message}),
    });
  } catch (error) {
    console.log(error);
  }
}