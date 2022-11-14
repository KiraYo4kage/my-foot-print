
import { request } from 'umi';

export async function getIndexList(params) {
  return request('/api/index', { params });
}
