import DeliveryCss from './DeliveryCss.module.css'
import Map from '../../Map/Map'
import Slash from '../../../img/ico/slash__block.png'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../context/store'
import { resetAddress, setAddress, setDeliveryMethod } from '../../../context/orderSice'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Address } from '../../../types/types'

const Delivery = () => {
    const [methodDelivery, setMethodDel] = useState('PickUp')
    const {register, handleSubmit} = useForm<Address>();
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(setDeliveryMethod(methodDelivery))
        dispatch(resetAddress())
    },[methodDelivery, dispatch])

    const addAddress: SubmitHandler<Address> = (data) => {
        if(methodDelivery === "Courier") {
            dispatch(setAddress(data))
        }
    }

    return(<>
        <div className={`${DeliveryCss.delivery} ${DeliveryCss.block}`}>
            <div className={DeliveryCss.name}>
                <span>2</span>
                <img src={Slash} alt="slash" />
                <span>Delivery</span>
            </div>
            <div className={DeliveryCss.block__wrapper}>
                <div className={DeliveryCss.delivery__method}>
                    <div className={DeliveryCss.method}>
                        <button onClick={()=>setMethodDel("PickUp")}>
                            <span>PickUp (FREE)</span>
                        </button>
                    </div>
                    <div className={DeliveryCss.method}>
                        <button onClick={()=>setMethodDel("Courier")}>
                            <span>Courier</span>
                        </button>
                    </div>
                </div>
                {methodDelivery==='PickUp' && (
                    <div id="pickup" className={DeliveryCss.delivery__bottom}>
                        <Map orderPage={true}/>
                    </div>)}
                {methodDelivery === "Courier" && (
                    <form onSubmit={handleSubmit(addAddress)} className={DeliveryCss.address__form}>
                        <input className={DeliveryCss.town__input} {...register("street", {required: true })} placeholder='input your street'/>
                        <input className={DeliveryCss.town__input} {...register("city", {required: true })}  placeholder='input your city'/>
                        <input className={DeliveryCss.town__input} {...register("state", {required: true })} placeholder='input your state'/>
                        <input className={DeliveryCss.town__input} {...register("zipCode", {required: true })} placeholder='input your zip-code'/>
                        <input className={DeliveryCss.town__input} {...register("country", {required: true })} placeholder='input your country'/>
                        <button className={DeliveryCss.submit__button} type="submit">Save</button>
                    </form>
                )}
            </div>
        </div>
    </>)
}

export default Delivery 

