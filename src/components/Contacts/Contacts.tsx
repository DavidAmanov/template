import React from 'react'
import ContactsCss from './Contacts.module.css'

const Contacts = () => {
    return(
       <>
        <section className={ContactsCss.section}>
            <div className={ContactsCss.section__wrapper}>
                <div className={ContactsCss.contacts}>
                    <div className={ContactsCss.contact}>
                        <div className={ContactsCss.contact__name}>Online store:</div>
                        <div className={ContactsCss.contact__info}>
                            <span className={ContactsCss.info}>+7 (499) 999-82-83</span>
                            <span className={ContactsCss.info}>rostelecom.merc@rt.ru</span>
                            <span className={ContactsCss.info}>Mon-Fri: 11:00-21:00</span>
                        </div>
                    </div>

                    <div className={ContactsCss.contact}>
                        <div className={ContactsCss.contact__name}>Wholesale purchases, distributors:</div>
                        <div className={ContactsCss.contact__info}>
                            <span className={ContactsCss.info}>+7 (905) 571-38-48</span>
                            <span className={ContactsCss.info}>optcodered@gmail.com</span>
                            <span className={ContactsCss.info}>Mon-Fri: 11:00-19:00</span>
                        </div>
                    </div>

                    <div className={ContactsCss.contact}>
                        <div className={ContactsCss.contact__name}>Cooperation, PR:</div>
                        <div className={ContactsCss.contact__info}>
                            <span className={ContactsCss.info}>prcodered@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    )
}

export default Contacts