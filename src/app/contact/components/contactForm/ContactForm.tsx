'use client'
import { Col, Row } from 'react-bootstrap';
import contactFormStyle from './contactForm.module.scss';
import { nunito } from '@fonts';
import React, { useReducer } from 'react';

type TContactFormState = {
  message: string;
  name: string;
  email: string;
  subject: string;
}
type TContactFormAction = {
  type: string;
  payload: string;
}
const initialState: TContactFormState = {
  message: "",
  name: "",
  email: "",
  subject: "",
};
const reducer = (state: TContactFormState, action: TContactFormAction) => {
  switch (action.type) {
    case 'changeMessage':
      return {...state, message: action.payload};
    case 'changeName':
      return {...state, name: action.payload};
    case 'changeEmail':
      return {...state, email: action.payload};
    case 'changeSubject':
      return {...state, subject: action.payload};
    }
  throw new Error();
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch({type: 'changeMessage', payload: e.target.value});
  }
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({type: 'changeName', payload: e.target.value});
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({type: 'changeEmail', payload: e.target.value});
  }
  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({type: 'changeSubject', payload: e.target.value});
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = state;
    
  }
  return (
    <form className={contactFormStyle["contact-form"]}>
      <Row>
        <Col className='col-12'>
          <textarea
            className={`${contactFormStyle['form-textarea']} form-control w-100`}
            name="message"
            id="contact-message"
            cols={30}
            rows={9}
            placeholder='enter message'
            value={state.message}
            onChange={handleMessageChange}
          ></textarea>
        </Col>
        <Col sm={6}>
          <input
            type="text"
            name='name'
            id="contact-name"
            className={contactFormStyle['form-input']}
            placeholder='enter your name'
            value={state.name}
            onChange={handleNameChange}
          />
        </Col>
        <Col sm={6}>
          <input
            type="email"
            name='email'
            id='contact-email'
            className={contactFormStyle['form-input']}
            placeholder='enter your email address'
            value={state.email}
            onChange={handleEmailChange}
          />
        </Col>
        <Col className='col-12'>
          <input
            type="text"
            name="subject"
            id='contact-subject'
            className={contactFormStyle['form-input']}
            placeholder='enter subject'
            value={state.subject}
            onChange={handleSubjectChange}
          />
        </Col>
      </Row>
      <div className={`${contactFormStyle['form-btn']} mt-3`}>
        <button type="submit" className={nunito.className}>send</button>
      </div>
    </form>
  )
}
