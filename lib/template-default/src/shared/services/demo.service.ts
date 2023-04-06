import { Caxios, CaxiosType } from '@/shared/common';
import { Urls } from '@/shared/config';
import { DemoModel } from '@/shared/models';

export class DemoService {
  // 获取示例数据
  public async fetchDemo(): Promise<DemoModel | null> {
    return await Caxios.get<DemoModel | null>({ url: Urls.demo }, CaxiosType.Default);
  }
}
