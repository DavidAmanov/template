import React, { useEffect, useState } from 'react'
import CatalogCategoryCss from './CatalogCategory.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../context/store'
import { fetchCategory } from '../../context/categorySlice'
import { Category } from '../../types/types'
import { Link } from 'react-router-dom'


const CatalogCategory = () => {
    const [showCategory, setShowCategory] = useState<boolean>(false)
    const category: Category[] =  useSelector((state: RootState)=> state.category.items)
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(fetchCategory())
    }, [dispatch])
    return(
        <>
            <section className={CatalogCategoryCss.catalog}>
                <div className={CatalogCategoryCss.btn__container}>
                    <button onClick={()=>setShowCategory(true)}>Catalog</button>
                </div>
                {showCategory && (
                    <div className={CatalogCategoryCss.catalog__items} onMouseLeave={()=>setShowCategory(false)}>
                        {category.map((item)=>(
                            <Link to={`/catalog`} state={item.name}>
                                <span>{item.name}</span>
                            </Link>))}
                    </div>
                )}
            </section>
        </>
    )
}

export default CatalogCategory