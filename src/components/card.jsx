
import { history } from 'umi';
import styles from './card.less';

export default function Card({
  text,
  thumbnail,
  link,
  children,
}) {
  const navi = () => history.push(link);
  return (
    <div className={styles.card} onClick={navi}>
      {
        children ? children : <div 
          className={styles.content}
          style={{ backgroundImage: `url(${thumbnail})` }}
        ><div className={styles.layer}>{text}</div></div>
      }
    </div>
  );
}
