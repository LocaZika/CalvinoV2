import { CaseStudy, ContactUs, HeroPage } from "@components";
import { getData } from "@actions";

export default async function caseStudyPage() {
  const caseStudyPage = await getData('/caseStudyPage');
  if (!caseStudyPage){
    return null;
  }
  const { title, subTitle, caseStudy }: TCaseStudyPage = caseStudyPage;
  return (
    <section className='case-study'>
      <HeroPage title={title} subTitle={subTitle}/>
      <CaseStudy data={caseStudy} />
      <ContactUs />
    </section>
  )
}
