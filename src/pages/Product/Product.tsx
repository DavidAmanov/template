import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductComp from "../../components/Product/Product";
import { useParams } from "react-router-dom";
import { Product } from "../../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../context/store";
import {fetchProductById} from '../../context/productSlice'
import { useSelector } from "react-redux";

const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>()
    const product = useSelector((state: RootState)=>state.product)
    const [productProp, setProduct] = useState<Product>(product);

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById({ id }));
        }
    }, [id, dispatch]);

    useEffect(() => {
        setProduct(product);
    }, [product]);

    return (
        <>
            <Header />
            {product && <ProductComp product={productProp} />}
            <Footer />
        </>
    );
};

export default ProductPage;
