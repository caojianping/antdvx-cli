import Vue from 'vue';
import { TypeUtil, DateUtil, DigitUtil } from '@/ts/utils';

// 日期格式化
Vue.filter('dateFormat', function(value: any, format: string = 'yyyy-MM-dd hh:mm:ss', isZeroize: boolean = true) {
    if (TypeUtil.isUndefinedOrNull(value)) return value;
    return DateUtil.dateFormat(value, format, isZeroize);
});

// 数字百分比
Vue.filter('digitPercent', function(value: any, precision: number = 2) {
    if (TypeUtil.isUndefinedOrNull(value)) return value;
    return DigitUtil.digitPercent(value, precision, true) + '%';
});

// 数字精度
Vue.filter('digitPrecision', function(value: any, precision: number = 2) {
    if (TypeUtil.isUndefinedOrNull(value)) return value;
    return DigitUtil.digitPrecision(value, precision, true);
});

// 单位
Vue.filter('unit', function(value: any, unit: string = '', isSpace: boolean = false) {
    if (TypeUtil.isUndefinedOrNull(value)) return value;
    if (!unit) return value;
    return isSpace ? `${value} ${unit}` : `${value}${unit}`;
});
