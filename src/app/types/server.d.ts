/** LAYOUT */
// Header
type TNavbarItem = {
  id: string,
  name: string,
  path: string,
}
type TNavbar = TNavbarItem[]
type TCallUs = string
type TContact = {
  name: string,
  path: string,
}
interface IHeader {
  navbar: TNavbar,
  callUs: TCallUs,
  contact: TContact,
}
// Footer
type TLogo = string
type TDescriptionFooter = string
type TMenuCaption = {
  id: string,
  name: string,
  path: string,
}
type TCaptionItem = {
  id: string,
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
  id: string,
  theme: string,
  title: string,
  text: string,
  link: string,
}
// Services
type TServiceItem = {
  id: string,
  title: string,
  img: string,
  content: string,
  path: string,
}
type TServices = {
  id: string,
  title: string,
  subTitle: string,
  items: TServiceItem[],
}
// About
type TAboutContentItem = {
  id: string,
  text: string,
}
type TAboutLinkItem = {
  text: string,
  path: string,
}
type TAbout = {
  id: string,
  title: string,
  subTitle: string,
  contents: TAboutContentItem[],
  link: TAboutLinkItem,
  img: string,
}
// Plans
type TPlan = {
  id: string,
  title: string,
  subTitle: string,
}
// Choose us
type TChooseUs = {
  id: string,
  title: string,
  subTitle: string,
  completedProjects: number,
  specialisedEmployees: number,
  text: string,
  speaker: string,
}
// Case study
type TCaseStudyImageItem = {
  id: string,
  path: string,
  title: string,
  subTitle: string,
}
type TCaseStudy = {
  id: string,
  title: string,
  subTitle: string,
  imgs: TCaseStudyImageItem[],
}
/** PAGE */
// About page
type TAboutPage = {
  title: string,
  subTitle: string,
}
// Services page
type TServicesPage = {
  title: string,
  subTitle: string,
}
// Case study page
type TCaseStudyPage = {
  title: string,
  subTitle: string,
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
  id: string,
  price: number,
  increaseTraffic: number,
  socialMediaMkt: boolean,
  freeOptimization: number,
  support: string,
  period: 'monthly' | 'yearly',
  classification: 'basic' | 'professional' | 'enterprise',
  path: string,
}
type TPricingPlans = TPricingPlanItem[];
// Brands
type TBrandItem = {
  id: string,
  path: string,
}
type TBrands = TBrandItem[]