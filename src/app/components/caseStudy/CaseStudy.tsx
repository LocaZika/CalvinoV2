import { Col, Container, Row } from 'react-bootstrap';
import caseStyle from './caseStudy.module.scss';
import { Carousel } from '@components';
import Image from 'next/image';
import { nunito } from '@app/fonts';

export default async function CaseStudy() {
  const getCaseStudy = await fetch(`${process.env.NEXT_PUBLIC_HOST}/caseStudy`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const caseStudy: TCaseStudy = await getCaseStudy.json();
  if(!caseStudy){
    return null;
  }
  const {title, subTitle, imgs} = caseStudy;
  return (
    <section className={`${caseStyle['case-study-area']} pt-100 fix`}>
      <Container>
        <Row className='justify-content-center'>
          <Col md={10} lg={8} xl={5}>
            <div className="section-title mb-60 text-center">
              <span>{title}</span>
              <h2 className={nunito.className}>{subTitle}</h2>
            </div>
          </Col>
        </Row>
        <div className={caseStyle['case-carousel']}>
          <Carousel
            autoPlaySpeed={3000}
            itemClass={caseStyle['case-item-container']}
            sliderClass={caseStyle['case-slider']}
            ssr={true}
          >
            {
              imgs.map(({id, path, subTitle, title}) => (
                <div key={id} className={caseStyle['case-item']}>
                  <Image src={path} alt={"case img"} width={348} height={295} />
                  <div className={caseStyle['guest-conent']}>
                    <p>{title}</p>
                    <h3 className={nunito.className}>{subTitle}</h3>
                  </div>
                </div>
              ))
            }
          </Carousel>
        </div>
      </Container>
    </section>
  )
}
