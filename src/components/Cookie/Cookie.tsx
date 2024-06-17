import React from 'react'
import CookieCss from './Cookie.module.css'
import Cross from '../../img/ico/cross.png'

const Contacts = () => {
    return(
       <>
        <section className={CookieCss.section}>
            <div className={CookieCss.section__wrapper}>
                <div className={CookieCss.cookie}>
                    <div className={`${CookieCss.cookie__cross} ${CookieCss.cookie__cross_650px}`}>
                        <span className={CookieCss.cookie__text}>PJSC Rostelecom processes <a className={CookieCss.cookie__link} href="#">Cookies</a> for the correct operation of the site and personalization of services, incl. using metric programs and analytics systems. You can prevent the processing of <a className="cookie__link" href="#">Cookies</a> in your browser settings.</span>
                        <button className={`${CookieCss.button_cross} ${CookieCss.button}`}><img className={CookieCss.cross} src={Cross} alt="close the cookie window" /></button>
                    </div>
                    <div className={CookieCss.cookie__right}>
                        <button className={`${CookieCss.button} ${CookieCss.button_style} ${CookieCss.button_adaptive}`}>
                            Accept
                        </button>
                        <div className={`${CookieCss.cookie__cross} ${CookieCss.cookie__cross_adaptive}`}>
                            <button className={`${CookieCss.button} ${CookieCss.button_cross}`}><img src="./ico/cross.png" alt="close the cookie window" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    )
}

export default Contacts