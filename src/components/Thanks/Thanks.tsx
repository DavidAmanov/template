import React from 'react'
import ThanksCss from './Thanks.module.css'

const Thanks = () => {
    return(
       <>
        <section className={ThanksCss.section}>
            <div className={ThanksCss.section__wrapper}>
                <div className={ThanksCss.thanks}>
                    <h1 className={ThanksCss.thanks__h1}>Thank you for the order!</h1>
                    <div className={ThanksCss.thanks__body}>
                        <div className={ThanksCss.thanks__text}>
                            <p className={ThanksCss.thanks__h2}>Your order №08306 for the amount Price paid and accepted for assembly.</p>
                            <span>You can find out more about the status of your order<br /> by email or in <a className={ThanksCss.link} href="#">your personal account</a> in the store.</span>
                        </div>
                        <div className="buttons">
                            <a href="#"><button className={`${ThanksCss.button} ${ThanksCss.button_style} ${ThanksCss.button_hover}`}>Go to catalog</button></a>
                            <a href="#"><button className={`${ThanksCss.button} ${ThanksCss.button_style} ${ThanksCss.button_hover}`}>Home page</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    )
}

export default Thanks