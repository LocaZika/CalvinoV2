'use client'
import {useState, useEffect} from 'react'

export default function useScrollY() {
  const [wScrollY, setWScrollY] = useState<number>(0);
  useEffect(() => {
    const handleScrollY = (): void => {
      setWScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScrollY);
    return (): void => {
      window.removeEventListener('scroll', handleScrollY);
    }
  }, []);

  return wScrollY;
}
