import { HeroPage, Service, Plan, ContactUs } from "@components";
import { getData } from "@actions";

export default async function ServicePage() {
  const servicesPage = await getData('/servicePage');
  if (!servicesPage){
    return null;
  }
  const { title, subTitle, service, plan }: TServicesPage = servicesPage;
  return (
    <section className='services'>
      <HeroPage title={title} subTitle={subTitle}/>
      <Service data={service} />
      <Plan data={plan} />
      <ContactUs />
    </section>
  )
}
