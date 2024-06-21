//31.128.39.49
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../../context/catalogSlice';
import ProductCss from "./Product.module.css";
import ButtonRed from '../Button/ButtonRed';
import ButtonGray from '../Button/ButtonGray';
import { RootState } from '../../context/store';

interface ProductProps {
    product: Product;
}

const ProductComp: React.FC<ProductProps> = ({ product }) => {
    const [count, setCount] = useState<number>(1);
    const cartId = useSelector((state: RootState) => state.user.cart_id);
    const token = useSelector((state: RootState)=> state.user.token)
    console.log(cartId, token); // Для отладки

    const plus = () => {
        setCount(count+1)
    }

    const minus = () =>{
        if(count>1){
            setCount(count-1)
        }
    }

    const addProductToCart = async () => {
        const data = {
            cart_id: cartId,
            product_id: product.id,
            quantity: count
        };
        console.log(data);

        try {
            const response = await fetch("http://localhost:3001/api/cartProduct/add", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`, 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (e) {
            return ("Cart not found");
        }
    }

    return (
        <div className={ProductCss.container}>
            <section className={ProductCss.picture}>
                <img src={product.img} alt="product img" />
            </section>
            <section className={ProductCss.description__container}>
                <div className={ProductCss.description__head}>
                    <h2>{product.name}</h2>
                    <span>Available</span>
                </div>
                <div className={ProductCss.description__text__block}>
                    <span>Collection: </span>
                    <span>{product.status}</span>
                    <span>Tagline:</span>
                    <span>{product.description}</span>
                    <span>Price:</span>
                    <span>{product.price}</span>
                </div>
                <div className={ProductCss.btn__container}>
                    <ButtonRed onClick={addProductToCart} />
                    <ButtonGray quantity={count} onClick1={minus} onClick2={plus}/>
                </div>
            </section>
        </div>
    );
}

export default ProductComp;
