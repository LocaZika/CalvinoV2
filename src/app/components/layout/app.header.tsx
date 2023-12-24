'use client'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '@public/imgs/logo.png';
import headerStyle from '@styles/header.module.scss';
import { convertTelNumber } from '@ultils/string';
import { HeaderMobile } from '@components';
import { useScrollY, useApi } from '@hooks';

export default function Header() {
  const {data}: {data: IHeader | undefined} = useApi('/header');
  const scrollY = useScrollY();
  if(!data){
    return (
      <div>loading...</div>
    )
  }
  return (
    <header>
      <Navbar id='navbar' className={
        scrollY > 100 ?
        `${headerStyle['navbar']} ${headerStyle['sticky']}`:
        `${headerStyle['navbar']} `
      }>
        <Container fluid>
          <div className='d-flex w-100 align-items-center justify-content-between flex-wrap position-relative'>
            <div className={`${headerStyle['navbar__leftside']} d-flex align-items-center`}>
              <div className={headerStyle["navbar__leftside__logo"]}>
                <Link href={'/'} className='nav-brand'>
                  <Image
                    src={logo}
                    alt='logo'
                    priority={true}
                  />
                </Link>
              </div>
              <Nav className={headerStyle['navbar__leftside__main-menu']}>
                <ul>
                  {
                    data?.navbar.map((item)  => (
                      <li key={item.id}>
                        <Link href={item.path}>{item.name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </Nav>
            </div>
            <div className={headerStyle['navbar__rightside']}>
              <Link href={`tel:${convertTelNumber(data?.callUs)}`} className={headerStyle["navbar__rightside__callUs"]}>
                call us: <span>{data?.callUs}</span>
              </Link>
              <Link href={data?.contact.path} className={headerStyle["navbar__rightside__contact"]}>
                {data?.contact.name}
              </Link>
            </div>
            <HeaderMobile
              navbar={data?.navbar}
              callUs={data?.callUs}
              contact={data?.contact}
              logo={logo}
              style={headerStyle}
            />
          </div>
        </Container>
      </Navbar>
    </header>
  )
}
