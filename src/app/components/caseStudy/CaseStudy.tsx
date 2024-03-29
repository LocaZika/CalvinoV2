import { Col, Container, Row } from 'react-bootstrap';
import caseStyle from './caseStudy.module.scss';
import { Carousel } from '@components';
import Image from 'next/image';
import { nunito } from '@app/fonts';

export default function CaseStudy({data}: {data: TCaseStudy}) {
  const {title, subTitle, imgs}: TCaseStudy = data;
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
              imgs.map(({_id, path, subTitle, title}) => (
                <div key={_id} className={caseStyle['case-item']}>
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
