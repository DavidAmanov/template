import OrderProductsCss from './OrderProductsCss.module.css'
import Slash from '../../../img/ico/slash__block.png'
import { CartProductType } from '../../../types/types'
import CartProduct from '../../CartProduct/CartProduct'


interface OrderProductsProp {
    products:  CartProductType[]
}

const OrderProducts:React.FC<OrderProductsProp> = ({products}) => {
    return(<>
        <div className={OrderProductsCss.name}>
            <span>1</span>
            <img src={Slash} alt="slash" />
            <span>Order</span>
        </div>
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