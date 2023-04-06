import Vue from 'vue';
import Vuex from 'vuex';

import { Token } from '@/shared/common';
import TYPES from './types';
import { IRootState } from './interfaces';

import demoModule from './modules/demo.module';

Vue.use(Vuex);

const rootState: IRootState = {
  tokenInfo: Token.getTokenInfo(),
  isFullLoading: false,
  isPageLoading: false,
  pageSizeOptions: ['10', '50', '100', '200', '500', '1000'],
};

export default new Vuex.Store({
  strict: false,
  modules: {
    demo: demoModule,
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
      state.tokenInfo = undefined;
      state.isFullLoading = false;
      state.isPageLoading = false;
    },
  },
  actions: {},
});
