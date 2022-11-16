const kedamaPic = '/static/kedamakyoudai.fe7e30c5.png';
const miCometPic = '/static/miComet.caca5c77.png';

const data = new Array(9).fill(0).map((value, index) => ([{
  id: index.toString(),
  text: '毛玉兄弟',
  thumbnail: kedamaPic,
  content: 'Koro桑生日凸，MikoMiko送的礼物，毛玉写成了毛王，可可爱爱にぇえ。',
}, {
  id: index.toString(),
  text: 'miComet',
  thumbnail: miCometPic,
  content: 'twitter老哥作的图，帅气！',
}][+Math.random().toFixed()]));

export default {

  // 返回值可以是数组形式
  'GET /api/index': { data },
};