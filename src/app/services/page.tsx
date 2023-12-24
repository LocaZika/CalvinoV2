import { HeroPage, Service, Plan, ContactUs } from "@components";
import { getData } from "@actions";

export default async function ServicePage() {
  const servicesPage: TServicesPage = await getData('/servicesPage');
  if (!servicesPage){
    return null;
  }
  const { title, subTitle } = servicesPage;
  return (
    <section className='services'>
      <HeroPage title={title} subTitle={subTitle}/>
      <Service />
      <Plan />
      <ContactUs />
    </section>
  )
}
