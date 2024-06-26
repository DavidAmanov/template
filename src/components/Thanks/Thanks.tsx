import React from 'react'
import ThanksCss from './Thanks.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../context/store'
import { Link } from 'react-router-dom'

const Thanks = () => {
    const amount = useSelector((state: RootState)=>(state.order.totalAmount))
    return(
       <>
        <section className={ThanksCss.section}>
            <div className={ThanksCss.section__wrapper}>
                <div className={ThanksCss.thanks}>
                    <h1 className={ThanksCss.thanks__h1}>Thank you for the order!</h1>
                    <div className={ThanksCss.thanks__body}>
                        <div className={ThanksCss.thanks__text}>
                            <p className={ThanksCss.thanks__h2}>Your order №08306 for the amount {amount} paid and accepted for assembly.</p>
                            <span>You can find out more about the status of your order<br /> by email or in 
                                <Link to='/profile' className={ThanksCss.link}>your personal account</Link> in the store.
                            </span>
                            <div className={ThanksCss.buttons}>
                            <Link to='/catalog'>
                                <button className={`${ThanksCss.button} 
                                    ${ThanksCss.button_style} 
                                    ${ThanksCss.button_hover}`}
                                    >Go to catalog
                                </button>
                            </Link>
                            <Link to='/'>
                                <button className={`${ThanksCss.button} 
                                    ${ThanksCss.button_style} 
                                    ${ThanksCss.button_hover}`}
                                    >Home page
                                </button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    )
}

export default Thanks