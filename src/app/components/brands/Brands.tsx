import { Col, Container, Placeholder, Row } from "react-bootstrap";
import { Carousel } from "@components";
import Image from "next/image";
import brandStyle from './brand.module.scss';

export default function Brands({data: brands}: {data: TBrandItem[]}){
  return (
    <Container>
      <Row>
        <Col xl={12}>
          {
            !brands ? (
              <Placeholder />
            ) : (
              <div className={brandStyle['brands-area']}>
                <Carousel ssr={true}>
                  {
                    brands.map(({_id, path}) => (
                      <Image key={_id} src={path} alt='brand' width={147} height={53} />
                    ))
                  }
                </Carousel>
              </div>
            )
          }
        </Col>
      </Row>
    </Container>
  )
}
