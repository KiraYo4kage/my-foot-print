
import styles from './card.less';

export default function Card({
  text,
  thumbnail,
  children,
}) {
  return (
    <div className={styles.card}>
      {
        children ? children : <div 
          className={styles.content}
          style={{ backgroundImage: `url(${thumbnail})` }}
        ><div className={styles.layer}>{text}</div></div>
      }
    </div>
  );
}
