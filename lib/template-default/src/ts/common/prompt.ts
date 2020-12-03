import { Modal } from 'ant-design-vue';

let commonOptions: any = {
    maskClosable: true,
    zIndex: 9999,
    title: '系统提示',
    okText: '确定'
};

export class Prompt {
    public static info(content: string) {
        content && Modal.info(Object.assign({}, commonOptions, { content: content }));
    }

    public static success(content: string) {
        content && Modal.success(Object.assign({}, commonOptions, { content: content }));
    }

    public static warning(content: string) {
        content && Modal.warning(Object.assign({}, commonOptions, { content: content }));
    }

    public static error(content: string) {
        content && Modal.error(Object.assign({}, commonOptions, { content: content }));
    }
}
