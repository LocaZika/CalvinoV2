'use client'
import { useScrollY } from '@hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import backTopStyle from '@styles/backTopBtn.module.scss'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function BackTopBtn() {
  const scrollY = useScrollY();
  const handleClick = (): void => {
    window.scrollTo(0 ,0);
  }
  return (
    <div
      className={
        scrollY > 100 ? backTopStyle['backtop-btn']:
        `${backTopStyle['backtop-btn']} ${backTopStyle['hidden']}`
      }
      onClick={handleClick}
    >
      <div className={
        `${backTopStyle['backtop-btn__arrow']} ${backTopStyle['arrow-one']}`
      }>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
      <div className={
        `${backTopStyle['backtop-btn__arrow']} ${backTopStyle['arrow-two']}`
      }>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  )
}
