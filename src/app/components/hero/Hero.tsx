import heroStyle from './hero.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { nunito } from '@app/fonts';

export default function Hero({data: {theme, title, text, link}}: {data: THero}) {
  return (
    <div className={`${heroStyle['slider-area']} position-relative`}>
      <div className={
        `${heroStyle['slider-area__slider-bg1']} ${heroStyle['slider-area__slider-height']} ${heroStyle['slider-area__slider-flex-center']}`
      }>
        <Container>
          <Row className='align-items-center'>
            <Col md={6} lg={6} xl={5} xxl={4}>
              <div className={heroStyle['slider-area__hero-caption']}>
                <span>{theme}</span>
                <h1 className={nunito.className}>{title}</h1>
                <p>{text}</p>
                <Link href={'/services'} className={heroStyle['slider-area__hero-caption__link']}>{link}</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
