import Validator, { ValidationResult } from 'jpts-validator';
import Util from '@/ts/utils';
import { Caxios, CaxiosType, md5 } from '@/ts/common';
import { Urls } from '@/ts/config';
import { LoginFormModel } from '@/ts/models';

export class AccountService {
	// 验证登录表单
	public static validateLoginForm(loginForm: LoginFormModel, isSmsCode: boolean = false): ValidationResult {
		if (!loginForm) return { status: false, data: { loginForm: '登录表单不可以为空' } };

		let key = 'loginForm',
			{ username, password } = loginForm,
			validator = new Validator();
		validator.addRule(key, { name: 'username', value: username }, { required: true }, { required: '用户名不可以为空' });
		validator.addRule(key, { name: 'password', value: password }, { required: true }, { required: '密码不可以为空' });
		return validator.execute(key);
	}

	// 登录
	public async login(loginForm: LoginFormModel): Promise<string> {
		return 'abcdefg';

		// let validateResult: ValidationResult = AccountService.validateLoginForm(loginForm, true);
		// if (!validateResult.status) return Promise.reject(Util.getFirstValue(validateResult.data));

		// let { username, password } = loginForm,
		// 	result = await Caxios.post<any>(
		// 		{
		// 			url: Urls.account.login,
		// 			data: { username, password: md5(password) }
		// 		},
		// 		CaxiosType.FullLoading
		// 	);
		// return result ? result.token : '';
	}

	// 退出
	public async logout(): Promise<boolean> {
		// await Caxios.post<any>({ url: Urls.account.logout }, CaxiosType.FullLoadingToken);
		return true;
	}
}
