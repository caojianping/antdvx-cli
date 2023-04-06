import Vue from 'vue';
import { State } from 'vuex-class';
import { Component } from 'vue-property-decorator';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN.js';

@Component({ name: 'App' })
export default class App extends Vue {
  @State('isFullLoading') isFullLoading!: boolean;
  locale: string = zh_CN;
}
