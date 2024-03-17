export interface IProduct {
    id: number;
    title: string;
    price: string;
    description: string;
    image: string;
    amount: number;
}

export interface IAddedProduct {
    product: IProduct;
    amount: number;
}