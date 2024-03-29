/** LAYOUT */
// Header
type TNavbarItem = {
  _id: string,
  name: string,
  path: string,
}
type TCallUs = string
type TContact = {
  name: string,
  path: string,
}
interface IHeader {
  navbar: TNavbarItem[],
  callUs: TCallUs,
  contact: TContact,
}
// Footer
type TLogo = string
type TDescriptionFooter = string
type TMenuCaption = {
  _id: string,
  name: string,
  path: string,
}
type TCaptionItem = {
  _id: string,
  title: string,
  menu: TMenuCaption[],
}
type TFooter = {
  logo: TLogo,
  description: TDescriptionFooter,
  captions: TCaptionItem[],
}
/** DATA COMPONENTS FROM SERVER */
// Hero
type THero = {
  _id: string,
  theme: string,
  title: string,
  text: string,
  link: string,
}
// Services
type TServiceItem = {
  _id: string,
  title: string,
  img: string,
  content: string,
  path: string,
}
type TServices = {
  _id: string,
  title: string,
  subTitle: string,
  items: TServiceItem[],
}
// About
type TAboutContentItem = {
  _id: string,
  text: string,
}
type TAboutLinkItem = {
  text: string,
  path: string,
}
type TAbout = {
  _id: string,
  title: string,
  subTitle: string,
  contents: TAboutContentItem[],
  link: TAboutLinkItem,
  img: string,
}
// Plans
type TPlan = {
  _id: string,
  title: string,
  subTitle: string,
  pricingPlans: TPricingPlanItem[],
}
// Choose us
type TChooseUs = {
  _id: string,
  title: string,
  subTitle: string,
  completedProjects: number,
  specialisedEmployees: number,
  text: string,
  speaker: string,
  brands: TBrandsItem[],
}
// Case study
type TCaseStudyImageItem = {
  _id: string,
  path: string,
  title: string,
  subTitle: string,
}
type TCaseStudy = {
  _id: string,
  title: string,
  subTitle: string,
  imgs: TCaseStudyImageItem[],
}
/** PAGE */
// About page
type TAboutPage = {
  title: string,
  subTitle: string,
  about: TAbout,
  chooseUs: TChooseUs,
}
// Services page
type TServicesPage = {
  title: string,
  subTitle: string,
  service: TServices,
  plan: TPlan,

}
// Case study page
type TCaseStudyPage = {
  title: string,
  subTitle: string,
  caseStudy: TCaseStudy,
}
// Blog page
type TBlogPage = {
  title: string,
  subTitle: string,
}
// Contact page
type TContactInfo = {
  address: {
    home: string,
    detail: string,
  },
  email: {
    mail: string,
    text: string,
  },
  tel: {
    phoneNumber: string,
    schedule: string,
  },
}
type TContactPage = {
  title: string,
  subTitle: string,
  formTitle?: string,
  info: TContactInfo,
}
/** DATA LISTS FROM SERVER */
// Pricing plans
type TPricingPlanItem = {
  _id: string,
  price: number,
  increaseTraffic: number,
  socialMediaMkt: boolean,
  freeOptimization: number,
  support: string,
  period: 'monthly' | 'yearly',
  classification: 'basic' | 'professional' | 'enterprise',
  path: string,
}
// Brands
type TBrandItem = {
  _id: string,
  path: string,
}