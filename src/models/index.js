import router from 'umi';
import { getIndexList } from '@/services/index';

const defaultState = {
  list: [],
};

export default {
  namespace: 'index',

  state: defaultState,

  effects: {
    * getData({ payload }, { put, call }) {
      const { data } = yield call(getIndexList, payload);
      yield put({
        type: 'updateData',
        payload: data,
      });
    },
  },

  reducers: {
    updateData(state, { payload }) {
      return {
        ...state,
        list: payload,
      };
    },
  },
};
