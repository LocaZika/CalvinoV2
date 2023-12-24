import { HeroPage } from "@components";
import { getData } from "@actions";
import { ContactForm, GoogleMap, ContactInfo} from "./components";
import contactStyle from "./contact.page.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { nunito } from "@fonts";

export default async function contactPage() {
  const contactPage: TContactPage = await getData('/contactPage');
  if (!contactPage){
    return null;
  }
  const { title, subTitle, formTitle, info } = contactPage;
  return (
    <div className='contact'>
      <HeroPage title={title} subTitle={subTitle}/>
      <section className={contactStyle['contact-section']}>
        <Container>
          <div className="d-none d-sm-block mb-5 pb-4">
            <GoogleMap height={480} width={'100%'} />
          </div>
          <Row>
            <Col className="col-12">
              <h2 className={`${contactStyle['contact-title']} ${nunito.className}`}>
                {formTitle}
              </h2>
            </Col>
            <Col lg={8}>
              <ContactForm />
            </Col>
            <Col lg={{span: 3, offset: 1}}>
              <ContactInfo info={info} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
