import { dummydata } from '.';
import { IProductsList, IProduct } from '../types/interfaces';

export const getProductsList = async(): Promise<IProductsList>=> {
    const {data} = await dummydata.get<IProductsList>('/products',{
        params: {
            limit:30
        },
    });
    return data
}
