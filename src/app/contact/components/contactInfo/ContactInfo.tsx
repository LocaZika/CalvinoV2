import { nunito } from '@fonts';
import contactInfoStyle from './contactInfo.module.scss';

export default function ContactInfo({info}: {info: TContactInfo}) {
  const { address, email, tel } = info;
  return (
    <>
      <div className={contactInfoStyle['contact-info-media']}>
        <span className={contactInfoStyle['contact-info-media__icon']}>
          <i className='ti-home'></i>
        </span>
        <div className={contactInfoStyle['contact-info-media__body']}>
          <h3 className={nunito.className}>{address.home}</h3>
          <p>{address.detail}</p>
        </div>
      </div>
      <div className={contactInfoStyle['contact-info-media']}>
        <span className={contactInfoStyle['contact-info-media__icon']}>
          <i className='ti-tablet'></i>
        </span>
        <div className={contactInfoStyle['contact-info-media__body']}>
          <h3 className={nunito.className}>{tel.phoneNumber}</h3>
          <p>{tel.schedule}</p>
        </div>
      </div>
      <div className={contactInfoStyle['contact-info-media']}>
        <span className={contactInfoStyle['contact-info-media__icon']}>
          <i className='ti-email'></i>
        </span>
        <div className={contactInfoStyle['contact-info-media__body']}>
          <h3 className={nunito.className}>{email.mail}</h3>
          <p>{email.text}</p>
        </div>
      </div>
    </>
  )
}
