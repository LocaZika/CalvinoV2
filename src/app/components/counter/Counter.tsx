'use client'
import CountUp from "react-countup";

interface ICounter{
  value: number,
  duration?: number,
  className?: string,
  scrollSpyOnce? : boolean,
}

export default function Counter({value, duration, className, scrollSpyOnce}: ICounter) {
    return (
    <CountUp
      className={className ? className : undefined}
      start={0}
      end={value ? value : 0}
      duration={duration ? duration : 1}
      enableScrollSpy={true}
      scrollSpyOnce={scrollSpyOnce}
      useEasing={false}
    />
  )
}
