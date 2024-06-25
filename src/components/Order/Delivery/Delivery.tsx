import DeliveryCss from './DeliveryCss.module.css'
import Map from '../../Map/Map'
import Slash from '../../../img/ico/slash__block.png'
import { useState } from 'react'

const Delivery = () => {
    const [methodDelivery, setMethodDelivery] = useState('PickUp')
    return(<>
        <div className={`${DeliveryCss.delivery} ${DeliveryCss.block}`}>
            <div className={DeliveryCss.name}>
                <span>2</span>
                <img src={Slash} alt="slash" />
                <span>Delivery</span>
            </div>
            <div className={`${DeliveryCss.block__wrapper} 
                ${DeliveryCss.block__wrapper_padding} 
                ${DeliveryCss.block__wrapper_hidden}`}>
                <div className={DeliveryCss.delivery__method}>
                    <div className={DeliveryCss.method}>
                        <a href="#pickup"><span>PickUp (FREE)</span></a>
                    </div>
                    <div className={DeliveryCss.method}>
                        <a href="#courier"><span>Courier</span></a>
                    </div>
                </div>
                <div id="pickup" className={`${DeliveryCss.delivery__bottom} 
                    ${DeliveryCss.delivery__bottom_pickup} 
                    ${DeliveryCss.delivery__bottom_adaptive}`}>
                    <div className={DeliveryCss.delivery__right}>
                        <Map orderPage={true}/>
                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default Delivery 