import footerStyle from '@styles/footer.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import logo from '@public/imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faInstagram, faFacebook, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { nunito } from '@app/fonts';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { getYear } from '@ultils/date';

export default async function Footer() {
  const getPage = await fetch(`${process.env.NEXT_PUBLIC_HOST}/footer`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await getPage.json();
  if (undefined == data){
    <div>loading</div>
  }
  return (
    <footer>
      <div className={footerStyle['footer-wrapper']}>
        <div className={footerStyle['footer-wrapper__footer-area']}>
          <Container>
            <Row className='justify-content-between'>
              <Col sm={8} md={6} lg={3} xl={3}>
                <div className={`${footerStyle['footer-wrapper__footer-area__caption']} mb-50`}>
                  <div className='mb-30'>
                    <div className='mb-35'>
                      <Image
                        src={logo}
                        alt='logo'
                      />
                    </div>
                    <div className={footerStyle['footer-wrapper__footer-area__caption__pera']}>
                      <p>{data?.description}</p>
                    </div>
                    <div className={footerStyle['footer-wrapper__footer-area__caption__socials']}>
                      <ul>
                        <li>
                          <Link href={'https://www.instagram.com'} target={'_blank'}>
                            <FontAwesomeIcon icon={faInstagram} />
                          </Link>
                        </li>
                        <li>
                          <Link href={'https://www.facebook.com'} target={'_blank'}>
                            <FontAwesomeIcon icon={faFacebook} />
                          </Link>
                        </li>
                        <li>
                          <Link href={'https://www.linkedin.com'} target={'_blank'}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Link>
                        </li>
                        <li>
                          <Link href={'https://www.youtube.com'} target={'_blank'}>
                            <FontAwesomeIcon icon={faYoutube} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              {
                data?.captions.map(({_id, title, menu}: TCaptionItem, index: number) => {
                  if (index + 1 != data?.captions.length){
                    return (
                      <Col sm={6} md={4} lg={2} xl={2} key={_id}>
                        <div className={footerStyle['footer-wrapper__footer-area__caption']}>
                          <h4 className={nunito.className}>{title}</h4>
                          <ul>
                            {
                              menu.map(({_id, name, path}) => (
                                  <li key={_id}>
                                    <Link href={path}>{name}</Link>
                                  </li>
                                )
                              )
                            }
                          </ul>
                        </div>
                      </Col>
                    )
                  }else {
                    return (
                      <Col sm={8} md={6} lg={4} xl={3} xxl={2} key={_id}>
                        <div className={`${footerStyle['footer-wrapper__footer-area__caption']} ${footerStyle['contact']}`}>
                          <h4 className={nunito.className}>{title}</h4>
                          <ul>
                            {
                              menu.map(({_id, name, path}, index: number) => {
                                if (index == menu.length - 1 || index == menu.length - 2) {
                                  return (
                                    <li key={_id} className={nunito.className}>
                                      <Link href={path}>{name}</Link>
                                    </li>
                                  )
                                }
                                return (
                                  <li key={_id}>
                                    <Link href={path}>{name}</Link>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </Col>
                    )
                  }
                })
              }
            </Row>
          </Container>
        </div>
        <div className={footerStyle['footer-wrapper__footer-bottom']}>
          <Container>
            <div className={footerStyle['footer-wrapper__footer-bottom__footer-border']}>
              <Row>
                <Col xl={12}>
                  <div className={'footer-border text-center'}>
                    <p>
                      copyright &copy;&nbsp;{getYear()}&nbsp;
                      all rights reserved | This template is made with&nbsp;
                      <FontAwesomeIcon icon={faHeart} color='#FF4495' />&nbsp;by&nbsp;
                      <Link href={'https://www.facebook.com/locazika/'}>LocaZika</Link>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  )
}
