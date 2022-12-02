export interface IProductsList {
    products: IProduct[];
    total: number;
    skip:0;
    limit:number;
}

export interface IProduct{
    id: number;
    title: string;
    description:string;
    price: number;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail:string;
    images: []
}