import { connect } from 'umi';
import { useEffect } from 'react';
import Card from '../components/card';
import styles from './index.less';
import yayJpg from '../assets/yay.jpg';
import kedamaPic from '@/assets/kedamakyoudai.png';
import miCometPic from '@/assets/miComet.png';

interface ModelState {
  index: {
    list: Array<Object>,
  }
}
interface ListParams {
  id: string,
  text: string,
  thumbnail: string,
}
interface Props {
  dispatch: Function,
  list: Array<ListParams>,
}

export default connect(({ index: { list } }: ModelState) => ({ list }))(function HomePage({ dispatch, list }: Props) {
  useEffect(() => {
    dispatch({ type: 'index/getData' });
  }, []);
  
  console.log(list, kedamaPic, miCometPic)
  return (
    <div id="app">
      <div className={styles.preface}>ねぇぇ、今どんな気持ちぃぃ</div>
      <div className={styles.content}>
        {
          list?.map(({ id, text, thumbnail }) => <Card text={text} thumbnail={thumbnail} link={`/detail/${id}`} key={id}/>)
        }
      </div>
    </div>
  );
});
