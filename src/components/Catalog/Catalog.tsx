import React, {useEffect, useState} from "react";
import { fetchCatalog } from "../../context/catalogSlice";
import Card from "../Card/Card";
import catalogCss from './catalog.module.css'
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from '../../context/store';
import { Product } from "../../types/types";
import { useLocation } from "react-router-dom";

const Catalog = () => {
    const [categoryFilter, setCategoryFilter] = useState<number>(0)
    const [priceFilter, setPriceFilter] = useState<string>("Popular")
    const [filteredCatalog, setFilteredCatalog] = useState<Product[]>([]);
    const sliderFlag = false
    let {state} = useLocation()


    const catalog: Product[] = useSelector((state: RootState) => state.catalog.items);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(fetchCatalog());
        if(state === "cap") setCategoryFilter(2)
        else if(state === "sweatshirt") setCategoryFilter(4)
        else if(state === "t-shirt") setCategoryFilter(3)
        else if(state === "pants") setCategoryFilter(5)
        else if(state === "jacket") setCategoryFilter(6)
        else if(state === "hoodie") setCategoryFilter(1)
        else if (state === null) setCategoryFilter(0)
      }, [dispatch]);

    const handlePriceFilter = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setPriceFilter(event.target.value)
    }

    const handleCategoryFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryFilter(Number(event.target.value));
    };

    useEffect(() => {
        let filteredProducts = [...catalog];

        if (categoryFilter !== 0) {
            filteredProducts = filteredProducts.filter(product => product.categoryId === categoryFilter);
        }

        switch (priceFilter) {
            case "low":
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case "high":
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setFilteredCatalog(filteredProducts);
    }, [priceFilter, categoryFilter, catalog]);

    return(
        <>
        <section className={catalogCss.section}>
            <div className={catalogCss.section__wrapper}>
                <div className={catalogCss.filter__section}>
                    <h2 className={catalogCss.section__h2}>Catalog</h2>
                    <select name="price" id="price" value={priceFilter} onChange={handlePriceFilter}>
                        <option value="popular">Popular</option>
                        <option value="low">From Low to High</option>
                        <option value="high">From High to Low</option>
                    </select>
                    <select name="category" id="category" value={categoryFilter} onChange={handleCategoryFilter}>
                        <option value={0}>All</option>
                        <option value={2}>Cap</option>
                        <option value={1}>Hoodie</option>
                        <option value={4}>Sweatshirt</option>
                        <option value={3}>T-shirt</option>
                        <option value={5}>Pants</option>
                        <option value={6}>Jacket</option>
                    </select>
                </div>
                <div className={catalogCss.catalog}>
                    {filteredCatalog.map((product)=>((<Card key={product.id} product={product} sliderFlag={sliderFlag}/>)))}
                </div>
            </div>
        </section>
        </>
    )
}

export default Catalog