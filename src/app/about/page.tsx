import { HeroPage, AboutUs, ChooseUs, ContactUs } from "@components";
import { getData } from "@actions";

export default async function AboutPage() {
  const aboutPage: TAboutPage = await getData('/aboutPage');
  if (!aboutPage){
    return null;
  }
  const { title, subTitle, about, chooseUs }: TAboutPage = aboutPage;
  return (
    <section className='about'>
      <HeroPage title={title} subTitle={subTitle}/>
      <AboutUs data={about} />
      <ChooseUs data={chooseUs} />
      <ContactUs />
    </section>
  )
}
