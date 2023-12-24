import { Col, Container, Row } from 'react-bootstrap';
import heroPageStyle from './heroPage.module.scss';
import { nunito } from '@app/fonts';

interface IHeropage{
  title: string,
  subTitle: string,
}

export default function heroPage({title, subTitle}: IHeropage) {
  return (
    <div className={heroPageStyle['hero-area']}>
      <div className={heroPageStyle['hero-area__bg']}>
        <Container>
          <Row className='align-items-center'>
            <Col md={9} lg={6} xl={6} xxl={5}>
              <div className={heroPageStyle['hero-area__caption']}>
                <h1 className={nunito.className}>{title}</h1>
                <p>{subTitle}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
