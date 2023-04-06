import Vue from 'vue';
import Vuex from 'vuex';

import TYPES from './types';
import { IRootState } from './interfaces';

import accountModule from './modules/account.module';

Vue.use(Vuex);

const rootState: IRootState = {
  isFullLoading: false,
  isPageLoading: false,
  pageSizeOptions: ['10', '50', '100', '200', '500', '1000'],
  tokenInfo: undefined,
};

export default new Vuex.Store({
  strict: false,
  modules: {
    account: accountModule,
  },
  state: rootState,
  mutations: {
    [TYPES.SET_LOADING](state: IRootState, payload: { key: string; value: boolean }) {
      const { key, value } = payload;
      state[key] = value;
    },
    [TYPES.SET_STATES](state: IRootState, payload: any) {
      for (let key in payload) {
        let value = payload[key];
        state[key] = value;
      }
    },
    [TYPES.CLEAR_STATES](state: IRootState) {
      state.isFullLoading = false;
      state.isPageLoading = false;

      state.tokenInfo = undefined;
    },
  },
  actions: {},
});
