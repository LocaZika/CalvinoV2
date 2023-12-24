import { Col, Container, Placeholder, Row } from "react-bootstrap";
import { Carousel } from "@components";
import Image from "next/image";
import brandStyle from './brand.module.scss';

export default async function Brands() {
  const getBrands = await fetch(`${process.env.NEXT_PUBLIC_HOST}/brands`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const brands: TBrands = await getBrands.json();
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
                    brands.map(({id, path}) => (
                      <Image key={id} src={path} alt='brand' width={147} height={53} />
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
