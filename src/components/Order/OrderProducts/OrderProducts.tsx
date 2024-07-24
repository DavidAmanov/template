import { CartProductType } from '../../../types/types'
import CartProduct from '../../CartProduct/CartProduct'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../context/store'
import { setOrderProducts } from '../../../context/orderSice'
import Title from '../Title/Title'


interface OrderProductsProp {
    products:  CartProductType[]
}

const OrderProducts:React.FC<OrderProductsProp> = ({products}) => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(()=>{
        dispatch(setOrderProducts(products))
    },[])
    return(<>
    <Title title='Order' number={1}/>
        {products.map((product, index)=>(
            <CartProduct 
                product={product.product} 
                key={product.id} 
                quantity={product.quantity}
                orderPage={true}
                numberProduct={index+1}
             />
        ))}
    </>)
}

export default OrderProducts