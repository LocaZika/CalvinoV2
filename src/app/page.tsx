import { ContactUs, Hero, Service, AboutUs, Plan, ChooseUs, CaseStudy } from '@components';
import { Metadata } from 'next';
import { getData } from '@actions';

const metadata: Metadata = {
  title: 'Home page',
  description: 'Home page Calvino'
}

export default async function Home() {
  const {hero} = await getData('/homePage');
  
  if (undefined == hero){
    <div>loading</div>
  }
  return (
    <div className="home">
      <Hero data={hero}/>
      <Service />
      <AboutUs />
      <Plan />
      <ChooseUs />
      <CaseStudy />
      <ContactUs />
    </div>
  )
}
