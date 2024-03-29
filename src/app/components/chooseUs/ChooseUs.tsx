import { Col, Container, Row } from 'react-bootstrap';
import chooseUsStyle from './chooseUs.module.scss';
import { nunito } from '@app/fonts';
import Link from 'next/link';
import { Brands, Counter } from '@components';

export default function ChooseUs({data}: {data: TChooseUs}) {
  const {title, subTitle, specialisedEmployees, completedProjects, text, speaker, brands}: TChooseUs = data;
  return (
    <section className={chooseUsStyle['choose-us-area']}>
      <Container>
        <Row className='justify-content-between align-items-center mb-20 pb-25 border-bottom'>
          <Col md={8} lg={6} xl={7} xxl={5}>
            <div className="section-title">
              <span>{title}</span>
              <h2 className={nunito.className}>{subTitle}</h2>
            </div>
          </Col>
          <Col md={4} lg={6} xl={5} xxl={7}>
            <Link href={'/about'} className={chooseUsStyle['redirect-btn']}>explore more</Link>
          </Col>
        </Row>
        <Row className='justify-content-between align-items-end mb-20'>
          <Col md={10} lg={7} xl={5}>
            <Row className='mt-40'>
              <Col sm={5} md={6} lg={5} xl={5}>
                <div className={`${chooseUsStyle['single']} mb-30`}>
                  <div className={`${chooseUsStyle['single-counter']}`}>
                    <Counter
                      className={nunito.className}
                      value={completedProjects >= 450 ? 450 : completedProjects}
                      scrollSpyOnce
                      duration={2}
                    />
                    {
                      completedProjects > 450 ?
                        <span className={nunito.className}>&nbsp;+</span> :
                        null
                    }
                  </div>
                  <div className={chooseUsStyle['pera-counter']}>
                    <p>successfully completed projects</p>
                  </div>
                </div>
              </Col>
              <Col sm={5} md={6} lg={5} xl={5}>
                <div className={`${chooseUsStyle['single']} ${chooseUsStyle['emp']} mb-30`}>
                  <div className={`${chooseUsStyle['single-counter']}`}>
                    <Counter
                      className={nunito.className}
                      value={specialisedEmployees >= 860 ? 860 : specialisedEmployees}
                      scrollSpyOnce
                      duration={2}
                    />
                    {
                      specialisedEmployees > 860 ?
                        <span className={nunito.className}>&nbsp;+</span> :
                        null
                    }
                  </div>
                  <div className={chooseUsStyle['pera-counter']}>
                    <p>highly specialised employees</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={10} lg={5} xl={7}>
            <div className={chooseUsStyle['right-cap']}>
              <p>{text}</p>
              <p>{speaker}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Brands data={brands} />
    </section>
  )
}
