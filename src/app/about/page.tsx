import { HeroPage, AboutUs } from "@components";
import { getData } from "@actions";

export default async function AboutPage() {
  const aboutPage: TAboutPage = await getData('/aboutPage');
  if (!aboutPage){
    return null;
  }
  const { title, subTitle } = aboutPage;
  return (
    <section className='about'>
      <HeroPage title={title} subTitle={subTitle}/>
      <AboutUs />
    </section>
  )
}
