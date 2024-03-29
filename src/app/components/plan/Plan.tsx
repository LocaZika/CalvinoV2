'use client'
import planStyle from './plan.module.scss';
import { useState } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { nunito } from '@app/fonts';
import { PlanCard } from '@components';


export default function Plan({data}: {data: TPlan}) {
  const {title, subTitle, pricingPlans}: TPlan = data;
  const [activeKey, setActiveKey] = useState<any>('monthly');
  const handleActiveKey = (key: any) => setActiveKey(key);
  const activeStyle = {
    color: 'var(--white)',
    background: '#192839',
    border: 0,
  }
  return (
    <section className={`${planStyle['plans-area']} fix`}>
      <Tab.Container activeKey={activeKey} onSelect={(key: any) => handleActiveKey(key)}>
        <Container className='p-bg pt-70'>
          <Row className='justify-content-center'>
            <Col md={10} lg={7} xl={8}>
              <div className="section-title text-center mb-15">
                <span>{title}</span>
                <h2 className={nunito.className}>{subTitle}</h2>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-between'>
              <Col xl={12}>
                <div className="nav-button">
                  <nav>
                    <Nav variant="tabs" className={`${nunito.className} ${planStyle['plans-tabs']}`}>
                      <Nav.Link
                        eventKey="monthly"
                        bsPrefix={planStyle['plans-tabs__item']}
                        style={activeKey === 'monthly' ? activeStyle : undefined}
                      >monthly</Nav.Link>
                      <Nav.Link
                        eventKey="yearly"
                        bsPrefix={planStyle['plans-tabs__item']}
                        style={activeKey === 'yearly' ? activeStyle : undefined}
                      >yearly</Nav.Link>
                    </Nav>
                  </nav>
                </div>
              </Col>
            </Row>
        </Container>
        <Container className='p-bg'>
          <Tab.Content>
            <Tab.Pane eventKey={'monthly'}>
              <Row>
                {
                  pricingPlans?.map((item: TPricingPlanItem) => {
                    if (item.period === 'monthly') {
                      return (
                        <Col sm={10} md={6} lg={4} xl={4} key={item._id}>
                          <PlanCard data={item} />
                        </Col>
                      )
                    }
                    return null
                  })
                }
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey={'yearly'}>
              <Row>
                {
                  pricingPlans?.map((item: TPricingPlanItem) => {
                    if (item.period === 'yearly') {
                      return (
                        <Col sm={10} md={6} lg={4} xl={4} key={item._id}>
                          <PlanCard data={item} />
                        </Col>
                      )
                    }
                    return null
                  })
                }
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </section>
  )
}
