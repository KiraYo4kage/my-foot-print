const kedamaPic = '/static/kedamakyoudai.fe7e30c5.png';
const miCometPic = '/static/miComet.caca5c77.png';

const data = new Array(9).fill(0).map(() => ([{
  text: '毛玉兄弟',
  thumbnail: kedamaPic,
}, {
  text: 'miComet',
  thumbnail: miCometPic,
}][+Math.random().toFixed()]));

export default {

  // 返回值可以是数组形式
  'GET /api/index': { data },
};