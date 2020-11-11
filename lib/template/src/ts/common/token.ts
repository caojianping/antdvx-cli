import { LocalStorage } from 'jts-storage';
import store from '@/store';
import TYPES from '@/store/types';
import { CONSTANTS } from '@/ts/config';
import { TokenInfo } from '@/ts/models';

export class Token {
    // 设置tokenInfo
    public static setTokenInfo(tokenInfo: TokenInfo) {
        LocalStorage.setItem<TokenInfo>(CONSTANTS.CACHE_TOKEN_INFO, tokenInfo);
    }

    // 获取tokenInfo
    public static getTokenInfo(): TokenInfo | null {
        return LocalStorage.getItem<TokenInfo>(CONSTANTS.CACHE_TOKEN_INFO);
    }

    // 移除tokenInfo
    public static removeTokenInfo(): boolean {
        LocalStorage.removeItem(CONSTANTS.CACHE_TOKEN_INFO);
        ['', 'demo/'].forEach((item: string) => {
            store.commit(item + TYPES.CLEAR_STATES);
        });
        return true;
    }
}
