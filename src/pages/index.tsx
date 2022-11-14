import { connect } from 'umi';
import { useEffect } from 'react';
import Card from '../components/card';
import styles from './index.less';
import yayJpg from '../assets/yay.jpg';
import kedamaPic from '@/assets/kedamakyoudai.png';
import miCometPic from '@/assets/miComet.png';

export default connect(({ index: { list } }) => ({ list }))(function HomePage({ dispatch, list }) {
  useEffect(() => {
    dispatch({ type: 'index/getData' });
  }, []);
  
  console.log(list, kedamaPic, miCometPic)
  return (
    <div id="app">
      <div className={styles.preface}>ねぇぇ、今どんな気持ちぃぃ</div>
      <div className={styles.content}>
        {
          list?.map(({ text, thumbnail }, index) => <Card text={text} thumbnail={thumbnail} key={index}/>)
        }
      </div>
    </div>
  );
});
