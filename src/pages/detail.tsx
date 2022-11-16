import { connect, useParams } from 'umi';
import styles from './detail.less';

interface ModelState {
  index: {
    list: Array<Object>,
  }
}

interface ListParams {
  id: string,
  text: string,
  thumbnail: string,
  content: string,
}

export default connect(({ index: { list } }: ModelState) => ({ list }))(function Detail({ list }: { list: Array<ListParams> }) {
  const { id } = useParams();
  console.log(list)
  const {
    thumbnail,
    text,
    content,
  } = list?.find((item: ListParams) => item.id === id) || {};
  return (
    <div>
      <img className={styles.thumbnail} src={thumbnail} />
      <h1 className={styles.title}>{text}</h1>
      <p className={styles.content}>{content}</p>
    </div>
  )
});