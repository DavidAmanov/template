import React from 'react'
import FooterCss from './footer.module.css'
import logo from '../../img/logo.png'
import telegram from '../../img/ico/telegram.png'
import vk from '../../img/ico/vk.png'
import youtube from '../../img/ico/youtube.png'

const Footer = () => {
    return(
        <>
        <footer className={FooterCss.footerTop}>
            <div className={FooterCss.footerTop__wrapper}>
                <img className={FooterCss.footer__logo} src={logo} alt="Logo" />
                <div className={FooterCss.footer__contacts}>
                    <span className={FooterCss.footer__mobile}>+1 111 111-11-11</span>
                    <a className={FooterCss.link} href="#"><span className={FooterCss.footer__email}>DavidAmanovIs@gmail.com</span></a>
                </div>
                <div className={FooterCss.footer__contacts}>
                    <a className={FooterCss.link} href="https://github.com/DavidAmanov"><span>GitHub</span></a>
                    <a className={FooterCss.link} href="https://www.linkedin.com/in/david-amanov/"><span>Linkedin</span></a>
                </div>
                <div className={FooterCss.footer__socials}>
                    <a className={FooterCss.social} href="#"><img src={telegram} alt="telegram" /></a>
                    {/* <a className={FooterCss.social} href="#"><img src={vk} alt="Vkontakete" /></a>
                    <a className={FooterCss.social} href="#"><img src={youtube} alt="youtube" /></a> */}
                </div>
            </div>
        </footer>
        <footer className={FooterCss.footerBottom}>
            <div className={FooterCss.footerBottom__wrapper}>
                <div className={FooterCss.footerBottom__copyRight}>
                    &copy;&nbsp;2024&nbsp;MerchShop
                </div>
                <div className={FooterCss.footerBottom__politics}>
                    <a className={FooterCss.link} href="#"><span>Data processing policy</span></a>
                    <a className={FooterCss.link} href="#"><span>Privacy Policy</span></a>
                </div>
                <div className={FooterCss.footerBottom__mobileVersion}>
                    <a className={FooterCss.link} href="#"><span>Mobile version</span></a>
                </div>
                <div className={FooterCss.footerBottom__PCVersion}>
                    <a className={FooterCss.link} href="#"><span>Full version</span></a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer