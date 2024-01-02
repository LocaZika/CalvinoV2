import { Placeholder } from 'react-bootstrap';
import loadingStyle from './Loading.module.scss';

interface ILoaing {
  style?: React.CSSProperties;
  xs?: string;
  size?: 'xs' | 'sm' | 'lg';
}

export default function Loading({style, size}: ILoaing) {
  return (
    <Placeholder
      animation='wave'
      style={style ? style : null}
      size={size ? size : undefined}
      className={loadingStyle['loading']}
    />
  )
}
