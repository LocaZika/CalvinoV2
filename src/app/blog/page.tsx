import { CaseStudy, ContactUs, HeroPage } from "@components";
import { getData } from "@actions";

export default async function blogPage() {
  const blogPage: TBlogPage = await getData('/blogPage');
  if (!blogPage){
    return null;
  }
  const { title, subTitle } = blogPage;
  return (
    <section className='case-study'>
      <HeroPage title={title} subTitle={subTitle}/>
    </section>
  )
}