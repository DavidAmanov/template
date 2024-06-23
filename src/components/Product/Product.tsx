//31.128.39.49
import React, { useState } from 'react';
import { Product } from '../../context/catalogSlice';
import ProductCss from "./Product.module.css";
import ButtonRed from '../Button/ButtonRed';
import ButtonGray from '../Button/ButtonGray';
import { AppDispatch } from '../../context/store';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../context/cartSlice';

interface ProductProps {
    product: Product;
}

const ProductComp: React.FC<ProductProps> = ({ product }) => {
    const [count, setCount] = useState<number>(1);
    const dispatch = useDispatch<AppDispatch>()

    const plus = () => {
        setCount(count+1)
    }

    const minus = () =>{
        if(count>1){
            setCount(count-1)
        }
    }

    const addProductToCart = async () => {
        dispatch(addProduct({quantity: count, productId: product.id}))
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
