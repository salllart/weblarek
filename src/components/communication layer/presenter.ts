import type { IApi, IDataProducts, IPostOrder, ISuccessOrder, IWrongOrder } from "../../types";

export class Presenter {
    constructor(protected api: IApi) {}

    getData(): Promise<IDataProducts> {
        return this.api.get<IDataProducts>('/product/');
    }

    makeOrder(info: IPostOrder): Promise<ISuccessOrder | IWrongOrder> {
        return this.api.post<ISuccessOrder | IWrongOrder>('/order', info);
    }
}
