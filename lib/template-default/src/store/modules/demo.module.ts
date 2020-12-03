import TYPES from '@/store/types';
import { IActionContext, IDemoState } from '@/store/interfaces';

import { DemoModel } from '@/ts/models';
import { DemoService } from '@/ts/services';

const demoService = new DemoService();

const demoState: IDemoState = {
    demo: undefined
};

export default {
    namespaced: true,
    state: demoState,
    mutations: {
        [TYPES.SET_STATES](state: IDemoState, payload: any) {
            for (let key in payload) {
                let value = payload[key];
                state[key] = value;
            }
        },
        [TYPES.CLEAR_STATES](state: IDemoState) {
            state.demo = undefined;
        }
    },
    actions: {
        // 获取示例数据
        async fetchDemo(context: IActionContext<IDemoState>): Promise<void> {
            let commit = context.commit;
            try {
                // todo: invoke request
                let demo: DemoModel | null = await demoService.fetchDemo();
                commit(TYPES.SET_STATES, { demo });
                return;
            } catch (error) {
                commit(TYPES.SET_STATES, { demo: null });
                return Promise.reject(error);
            }
        }
    }
};
