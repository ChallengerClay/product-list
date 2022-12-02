import { dummydata } from '.';
import { IProductsList } from '../types/interfaces';

export const getProductsList = async(): Promise<IProductsList>=> {
    const {data} = await dummydata.get<IProductsList>('/products',{
        params: {
            total:100,
            limit:20,
        },
    });
    return data
}
    