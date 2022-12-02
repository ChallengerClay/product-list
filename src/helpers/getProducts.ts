import { dummydata } from '.';
import { IProductsList } from '../types/interfaces';

export const getProductsList = async(page:number): Promise<IProductsList>=> {
    const {data} = await dummydata.get<IProductsList>('/products',{
        params: {
            total:100,
            skip: ((page -1) * 20),
            limit:20,
        },
    });
    return data
}
