export interface Product{
    id: number;
    name: string;
    price: number;
    status: string;
    description: string;
    categoryId: number;
    img: string;
}

export interface CartProductType {
    id: number,
    productId: number,
    quantity: number,
    cartId: number,
    product: Product
}