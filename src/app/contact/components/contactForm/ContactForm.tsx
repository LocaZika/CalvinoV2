'use client'
import { Col, Row } from 'react-bootstrap';
import contactFormStyle from './contactForm.module.scss';
import { nunito } from '@fonts';
import React, { useState } from 'react';
import { sendEmail } from '@actions';

interface IEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const sendMail = async (data: IEmailData) => {
  const send = await fetch("/api/sendEmail", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  if (send.ok){
    return await send.json();
  }else{
    return console.log("Send email failed");
  }
}

export default function ContactForm() {
  const [isSend, setIsSend] = useState<boolean>(false);
  return (
    <form
      className={contactFormStyle["contact-form"]}
      // onSubmit={handleSubmit}
      action={sendEmail}
    >
      <Row>
        <Col className='col-12'>
          <textarea
            className={`${contactFormStyle['form-textarea']} form-control w-100`}
            name="message"
            id="contact-message"
            cols={30}
            rows={9}
            placeholder='enter message'
          ></textarea>
        </Col>
        <Col sm={6}>
          <input
            type="text"
            name='name'
            id="contact-name"
            className={contactFormStyle['form-input']}
            placeholder='enter your name'
            
          />
        </Col>
        <Col sm={6}>
          <input
            type="email"
            name='email'
            id='contact-email'
            className={contactFormStyle['form-input']}
            placeholder='enter your email address'
          />
        </Col>
        <Col className='col-12'>
          <input
            type="text"
            name="subject"
            id='contact-subject'
            className={contactFormStyle['form-input']}
            placeholder='enter subject'
          />
        </Col>
      </Row>
      <div className={`${contactFormStyle['form-btn']} mt-3`}>
        <button type="submit" className={nunito.className}>send</button>
      </div>
    </form>
  )
}
