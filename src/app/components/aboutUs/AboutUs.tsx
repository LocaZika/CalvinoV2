import { Col, Container, Row } from 'react-bootstrap';
import aboutUsStyle from './aboutUs.module.scss';
import Link from 'next/link';
import { nunito } from '@app/fonts';

interface IContentAbout{
  _id: string,
  text: string,
}

interface IAbout{
  _id: string,
  title: string,
  subTitle: string,
  contents: IContentAbout[],
  link: {
    text: string,
    path: string,
  },
  img: string,

}


export default function AboutUs({data}: {data: IAbout}) {
  const {title, subTitle, contents, link, img}: IAbout = data;
  return (
    <section className={aboutUsStyle['about-area']}>
      <Container>
        <Row className='align-items-center'>
          <Col md={8} lg={6} xl={6} xxl={5}>
            <div className={aboutUsStyle['about-img']}>
              <img src={img} alt="about-img" />
            </div>
          </Col>
          <Col md={9} lg={6} xl={6} xxl={{offset: 1, span: 5}}>
            <div className={aboutUsStyle['about-caption']}>
              <div className='section-title mb-25'>
                <span>{title}</span>
                <h2 className={nunito.className}>{subTitle}</h2>
                {
                  contents.map(({_id, text}, index) => (
                    contents.length != index + 1 ?
                    <p key={_id}>{text}</p> :
                    <p key={_id} className='mb-40 pt-10'>{text}</p>
                  ))
                }
              </div>
              <Link href={link.path} className=''>{link.text}</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
