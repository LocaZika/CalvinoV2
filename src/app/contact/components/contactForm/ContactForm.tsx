'use client'
import { Col, Row } from 'react-bootstrap';
import contactFormStyle from './contactForm.module.scss';
import { nunito } from '@fonts';
import { sendEmail } from '@actions';
import { useFormStatus } from 'react-dom';

export default function ContactForm() {
  const { pending } = useFormStatus();
  return (
    <form
      className={contactFormStyle["contact-form"]}
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
        <button
          type="submit"
          className={`${nunito.className} ${pending ? 'is-pending' : null}`}
          aria-disabled={pending}
          disabled={pending}
        >
          {pending === false ? 'send' : 'sending'}
        </button>
      </div>
    </form>
  )
}
