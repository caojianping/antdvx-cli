export * from './type.util';
export * from './string.util';
export * from './digit.util';
export * from './array.util';
export * from './date.util';
export * from './device.util';
export * from './random.util';
export * from './parameter.util';

// json字符串转换对象函数
function parseJSON<T extends object>(value: string = ''): T {
    try {
        return JSON.parse(value) as T;
    } catch (error) {
        throw error;
    }
}

// 对象副本函数
function duplicate<T extends object>(data: T): T {
    return parseJSON(JSON.stringify(data)) as T;
}

// 打印错误
function printError(err: any, flag: string, isAlert: boolean = false): void {
    window.console && window.console.log(`${flag} err:`, typeof err, err);
    isAlert && alert(`${flag} err:` + JSON.stringify(err, null, 2));
}

// 获取对象第一个key
function getFirstKey(data: any): string {
    data = data || {};
    let firstKey = '';
    for (const key in data) {
        firstKey = key;
        break;
    }
    return firstKey;
}

// 获取对象第一个value
function getFirstValue(data: any): any {
    data = data || {};
    let firstValue = '';
    for (const key in data) {
        firstValue = data[key];
        break;
    }
    return firstValue;
}

// 获取根链接路径
function getRootUrl(): string {
    const { protocol, host, pathname } = window.location;
    return `${protocol}//${host}${pathname}`;
}

// 跳转至顶部
function jumpTop(id: string = 'app'): void {
    const app = document.getElementById(id);
    app && app.scrollIntoView(true);
}

const Util = {
    parseJSON, // json字符串转换对象函数
    duplicate, // 对象副本函数
    printError, // 打印错误

    getFirstKey, // 获取对象第一个key
    getFirstValue, // 获取对象第一个value

    getRootUrl, // 获取根链接路径
    jumpTop // 跳转至顶部
};

export default Util;
