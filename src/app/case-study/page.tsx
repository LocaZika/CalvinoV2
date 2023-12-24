import { CaseStudy, ContactUs, HeroPage } from "@components";
import { getData } from "@actions";

export default async function caseStudyPage() {
  const caseStudyPage: TCaseStudyPage = await getData('/caseStudyPage');
  if (!caseStudyPage){
    return null;
  }
  const { title, subTitle } = caseStudyPage;
  return (
    <section className='case-study'>
      <HeroPage title={title} subTitle={subTitle}/>
      <CaseStudy />
      <ContactUs />
    </section>
  )
}
