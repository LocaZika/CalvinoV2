'use client'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

interface ICarouselProps {
  dragable?: boolean,
  swipleable?: boolean,
  children: React.ReactNode,
  autoPlaySpeed?: number,
  itemClass?: string,
  sliderClass?: string,
  ssr?: boolean,
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 480 },
    items: 2,
  },
  extraMobile: {
    breakpoint: { max: 480, min: 0},
    items: 1,
  }
};
/**
 * 
 * @param dragable - set dragable on device. Default is false.
 * @param swipleable - set swipleable on mobile/tablet devices. Default is false.
 * @param autoPlaySpeed - set auto play speed. Default is 3000.
 * @param itemClass - set item class.
 * @returns Carousel component
 */
export default function CustomCarousel({ssr, dragable, swipleable, children, autoPlaySpeed, itemClass, sliderClass}: ICarouselProps) {
  
  return (
    <Carousel
      autoPlay={true}
      autoPlaySpeed={autoPlaySpeed ? autoPlaySpeed : 2000}
      responsive={responsive}
      draggable={dragable ? dragable : false}
      swipeable={swipleable ? swipleable : false}
      infinite={true}
      itemClass={itemClass ? itemClass : undefined}
      sliderClass={sliderClass ? sliderClass : undefined}
      arrows={false}
      ssr={ssr ? ssr : false}
    >
      {children}
    </Carousel>
  )
}
