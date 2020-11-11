import { Caxios } from '@/ts/common';
import { Urls, CaxiosType } from '@/ts/config';
import { DemoModel } from '@/ts/models';

export class DemoService {
    // 获取示例数据
    public async fetchDemo(): Promise<DemoModel | null> {
        return await Caxios.get<DemoModel | null>({ url: Urls.demo }, CaxiosType.Default);
    }
}
