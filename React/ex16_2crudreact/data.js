import myUrl from '../tamplet/src/api';
async function data() {
  let { data } = await myUrl.get('/users');
  return data;
}
export default data();
