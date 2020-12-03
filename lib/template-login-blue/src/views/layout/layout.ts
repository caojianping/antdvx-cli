import Vue from 'vue';
import { namespace, State, Mutation } from 'vuex-class';
import { Component, Watch } from 'vue-property-decorator';

import { Prompt, Token } from '@/ts/common';
import { IMenuOption } from '@/ts/interfaces';
import { TokenInfo } from '@/ts/models';
import TYPES from '@/store/types';

const accountModule = namespace('account');

@Component({
    name: 'Layout',
    components: {}
})
export default class Layout extends Vue {
    @State('tokenInfo') tokenInfo?: TokenInfo | null;
    @Mutation(TYPES.SET_STATES) setRootStates!: (payload: any) => any;
    @accountModule.Action('logout') logoutAction!: () => any;

    menus: Array<IMenuOption> = [
        {
            title: '菜单一',
            key: '/menu1',
            icon: 'area-chart',
            items: [
                {
                    title: '菜单11',
                    key: '/menu1/item1',
                    path: '/menu1/item1'
                },
                {
                    title: '菜单12',
                    key: '/menu1/item2',
                    path: '/menu1/item2'
                }
            ]
        },
        {
            title: '菜单二',
            key: '/menu2',
            icon: 'pie-chart',
            items: [
                {
                    title: '菜单21',
                    key: '/menu2/item1',
                    path: '/menu2/item1'
                },
                {
                    title: '菜单22',
                    key: '/menu2/item2',
                    path: '/menu2/item2'
                }
            ]
        }
    ];
    isCollapsed: boolean = false;
    openKeys: Array<any> = [];
    selectedKeys: Array<any> = [];
    rootSubmenuKeys: Array<string> = ['/home', '/menu1', '/menu2'];

    // 切换侧边栏
    toggleSider() {
        this.isCollapsed = !this.isCollapsed;
    }

    // 处理菜单click事件
    handleMenuClick({ item, key, selectedKeys }) {
        this.selectedKeys = [key];
    }

    // 处理菜单change事件
    handleMenuChange(keys: Array<any>) {
        let { openKeys, rootSubmenuKeys } = this,
            openKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(openKey) === -1) {
            this.openKeys = keys;
        } else {
            this.openKeys = openKey ? [openKey] : [];
        }
    }

    // 退出
    async logout() {
        try {
            let result = await this.logoutAction();
            if (!result) Prompt.error('退出失败');
            else this.$router.push({ path: '/login' });
        } catch (error) {
            Prompt.error(error.message || error);
        }
    }

    // 初始化数据
    initData(route: any) {
        this.setRootStates({ tokenInfo: Token.getTokenInfo() });
        let path = route.path || '',
            openMatches = path.match(new RegExp('^/([^/]+)'));
        if (openMatches) {
            this.openKeys = [openMatches[0]];
        }
        this.selectedKeys = [path];
    }

    created() {
        this.initData(this.$route);
    }

    @Watch('$route')
    watchRoute(route: any) {
        this.initData(route);
    }
}
