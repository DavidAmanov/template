import React from "react";
import FooterCss from "./footer.module.css";
import logo from "../../img/logo.png";
import telegram from "../../img/ico/telegram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={FooterCss.footerTop}>
        <div className={FooterCss.footerTop__wrapper}>
          <Link to="/">
            <img className={FooterCss.footer__logo} src={logo} alt="Logo" />
          </Link>
          <div className={FooterCss.footer__contacts}>
            <span className={FooterCss.footer__mobile}>+1 111 111-11-11</span>
            <a className={FooterCss.link} href="#">
              <span className={FooterCss.footer__email}>
                DavidAmanovIs@gmail.com
              </span>
            </a>
          </div>
          <div className={FooterCss.footer__contacts}>
            <a className={FooterCss.link} href="https://github.com/DavidAmanov">
              GitHub
            </a>
            <a
              className={FooterCss.link}
              href="https://www.linkedin.com/in/david-amaLinkedin"
            >
              Linkedin
            </a>
          </div>
          <div className={FooterCss.footer__socials}>
            <a className={FooterCss.social} href="#">
              <img src={telegram} alt="telegram" />
            </a>
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
            <a className={FooterCss.link} href="#">
              Data processing policy
            </a>
            <a className={FooterCss.link} href="#">
              Privacy Policy
            </a>
          </div>
          <div className={FooterCss.footerBottom__mobileVersion}>
            <a className={FooterCss.link} href="#">
              Mobile version
            </a>
          </div>
          <div className={FooterCss.footerBottom__PCVersion}>
            <a className={FooterCss.link} href="#">
              Full version
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
