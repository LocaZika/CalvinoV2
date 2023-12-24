import { Col, Container, Row } from 'react-bootstrap';
import contactStyle from './contactUs.module.scss';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className={contactStyle['contact-us']}>
      <Container>
        <Row>
          <Col sm={12} md={9} lg={{offset: 5, span: 7}} xl={{span: 5, offset: 6}}>
            <div className={contactStyle['single-contact']}>
              <div className={contactStyle['caption']}>
                <h5>
                  interested to<br/>digging dipper?
                </h5>
                <p>
                  we’re out to create purposeful spaces that balance art and creativity with science and strategy.
                </p>
                <Link href={'/contact'} className={contactStyle['contact-btn']}>contact us</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
