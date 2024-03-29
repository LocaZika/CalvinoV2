import Link from 'next/link';
import planCardStyle from './planCard.module.scss';
import Image from 'next/image';
import { nunito } from '@app/fonts';
import { convertFloat } from '@ultils/number';


// props = {data} -- {data}: IProps
export default function PlanCard({data}: {data: TPricingPlanItem}) {
  const {price, increaseTraffic, socialMediaMkt, freeOptimization, support, classification, path} = data;
  return (
    <div className={`${planCardStyle['plan-card']} text-center mb-30`}>
      <div className={`${planCardStyle["plan-card__top"]}`}>
        <div className={planCardStyle["card-icon"]}>
          <Image src={path} alt='card-icon' width={41} height={37} />
        </div>
        <span>{classification}</span>
      </div>
      <div className={`${planCardStyle["plan-card__mid"]}`}>
        <h4 className={`${nunito.className}`}>$ {convertFloat(price)}</h4>
      </div>
      <div className={`${planCardStyle["plan-card__bottom"]}`}>
        <ul className={socialMediaMkt == false ? planCardStyle['fix-height'] : undefined}>
          <li>increase traffic {increaseTraffic}%</li>
          {
            socialMediaMkt == true ? <li>social media marketing</li> : null
          }
          <li>{freeOptimization} free optimization</li>
          <li>{support} support</li>
        </ul>
        <Link href={'/contact'} className={`${planCardStyle['card-btn']} ${nunito.className}`}>get started</Link>
      </div>
    </div>
  )
}
