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
export interface Cart {
    cartProducts: CartProductType[],
    totalAmount: number,
    productId: number
}

export interface Favourites {
    favouriteProduct: CartProductType[]
}
export interface Category{
    id: number,
    name: string
}
export interface Address {
    street:string,
    city:string,
    state:string,
    zipCode:string,
    country:string
}
export interface Recipient{
    name: string,
    lastName: string,
    mobilePhone: string,
    email: string,
    comment: string
}


interface Order{
    status: string
}
interface Payment {
    method:string,
    status: string,
    amount: number,
}

interface OrderItem {
    productId: number,
    quantity: number,
    price: number
}
export interface OrderFetch {
    userId: string,
    addressData: Address,
    orderData: Order,
    paymentData: Payment,
    orderItems: OrderItem[],
    recipientData:Recipient,
    deliveryMethod: string,
    orderId: number
}

export interface UserFromServer {
    userId: string;
    username: string,
    email: string,
    photo: string,
    role: "ADMIN" | "USER"

}
export interface User {
    accessToken: string,
    refreshToken: string,
    user: UserFromServer,
    cart_id: number,
    favourite_id: number,
}

export interface Payments{
    id: number
    name:string
}

export interface CatalogState {
    items: Product[]
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: string | undefined
}

export interface CategoryState {
    items: Category[],
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | undefined;
}


export interface OrderFromServer {
    status: string
    id: number
    createdAt: any
    updatedAt: any
    userId: string
}