import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component } from 'vue-property-decorator';

import TYPES from '@/store/types';
import Util from '@/ts/utils';
import { Prompt } from '@/ts/common';
import { LoginFormModel } from '@/ts/models';

const accountModule = namespace('account');

@Component({
    name: 'Login',
    components: {}
})
export default class Login extends Vue {
    @accountModule.State('loginForm') loginForm!: LoginFormModel;
    @accountModule.Mutation(TYPES.SET_STATES) setStates!: (payload: any) => any;
    @accountModule.Mutation(TYPES.CLEAR_STATES) clearStates!: () => any;
    @accountModule.Action('login') login!: () => any;

    rules: any = {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    };

    // 处理表单change事件
    handleFormChange(key: string, value: any) {
        let loginForm = Util.duplicate(this.loginForm);
        loginForm[key] = value;
        this.setStates({ loginForm });
    }

    // 提交登录表单
    submit() {
        let self = this,
            $form: any = self.$refs.form;
        $form.validate(valid => {
            if (valid)
                (async function() {
                    try {
                        let result = await self.login();
                        if (!result) {
                            Prompt.error('登录失败');
                        } else {
                            self.$router.push({ path: '/home' });
                        }
                    } catch (error) {
                        Prompt.error(error.message || error);
                    }
                })();
            else return false;
        });
    }

    // 用户名获取焦点
    usernameFocus() {
        let self = this;
        self.$nextTick(function() {
            let $username: any = self.$refs.username;
            if ($username) {
                $username.focus();
            }
        });
    }

    mounted() {
        Util.jumpTop();
        this.usernameFocus();
    }
}
