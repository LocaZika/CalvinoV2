'use client'
import Image from 'next/image';
import cardStyle from './card.module.scss';
import Link from 'next/link';
import { ICardData } from '@/datatypes/types';
import { nunito } from '@app/fonts';

interface ICard{
  data: ICardData,
}


export default function Card({data: {title, img, content, path}}: ICard) {
  return (
    <div className={`${cardStyle['card']} mb-50`}>
      <h5 className={nunito.className}>
        <Link href={path}>{title}</Link>
      </h5>
      <div className={cardStyle['card__img']}>
        <Image
          src={img}
          alt='card-img'
          width={44.04}
          height={44.04}
        />
      </div>
      <div className={cardStyle['card__cap']}>
        <p>{content}</p>
      </div>
    </div>
  )
}
