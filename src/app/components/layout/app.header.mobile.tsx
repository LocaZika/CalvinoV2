'use client'
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { convertTelNumber } from '@ultils/string';

interface IHeaderMobile extends IHeader{
  logo: StaticImageData,
  style: {[key: string]: string},
}

export default function HeaderMobile({navbar, callUs, contact, logo, style}: IHeaderMobile) {
  const [isShown, setIsShown] = useState<boolean>(false);
  const handleOpen = (): void => setIsShown(true);
  const handleClose = (): void => setIsShown(false);
  return (
    <>
      <button onClick={handleOpen} className={style['navbar__mobile__btn']}>
        menu&nbsp;
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Offcanvas show={isShown} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image src={logo} alt='logo' />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={style['navbar__mobile']}>
            <ul className={style['navbar__mobile__menu']}>
              {
                navbar.map((item) => (
                  <li key={item.id}>
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))
              }
            </ul>
            <Link href={`tel:${convertTelNumber(callUs)}`} className={style["navbar__mobile__callUs"]}>
              call us: <span>{callUs}</span>
            </Link>
            <Link href={contact.path} className={style["navbar__mobile__contact"]}>
              {contact.name}
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
