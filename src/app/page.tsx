import { ContactUs, Hero, Service, AboutUs, Plan, ChooseUs, CaseStudy } from '@components';
import { Metadata } from 'next';
import { getData } from '@actions';

const metadata: Metadata = {
  title: 'Home page',
  description: 'Home page Calvino'
}

export default async function Home() {
  const {hero, about, service, plan, caseStudy, chooseUs}= await getData('/homePage');
  
  if (undefined == hero || undefined == service || undefined == plan || undefined == caseStudy){
    <div>loading...</div>
  }
  return (
    <div className="home">
      <Hero data={hero}/>
      <Service data={service} />
      <AboutUs data={about} />
      <Plan data={plan} />
      <ChooseUs data={chooseUs} />
      <CaseStudy data={caseStudy} />
      <ContactUs />
    </div>
  )
}
