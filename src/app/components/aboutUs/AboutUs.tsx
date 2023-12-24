import { Col, Container, Row } from 'react-bootstrap';
import aboutUsStyle from './aboutUs.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { nunito } from '@app/fonts';

interface IContentAbout{
  id: string,
  text: string,
}

interface IAbout{
  id: string,
  title: string,
  subTitle: string,
  contents: IContentAbout[],
  link: {
    text: string,
    path: string,
  },
  img: string,

}


export default async function AboutUs() {
  const getData = await fetch(`${process.env.NEXT_PUBLIC_HOST}/about`);
  const data = await getData.json();
  if(!data){
    return null;
  }
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
                  contents.map(({id, text}, index) => (
                    contents.length != index + 1 ?
                    <p key={id}>{text}</p> :
                    <p key={id} className='mb-40 pt-10'>{text}</p>
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
