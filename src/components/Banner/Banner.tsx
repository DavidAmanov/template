import React from 'react'
import BannerCss from './Banner.module.css'
import BG from '../../img/bannerbg.png'


const Banner = () => {
    return(
        <div className={BannerCss.banner}>
            <div className={BannerCss.banner__wrapper}>
                <div><span className={BannerCss.banner__text}>Winter, fashion<br />and technologies</span></div>    
                <div className={BannerCss.banner__text2}>[new collection]</div>
                <h1 className={BannerCss.banner__name}>Merch</h1>
                <a href="#"><button className={`${BannerCss.button} ${BannerCss.button_cursor} ${BannerCss.button_main} ${BannerCss.button_banneradaptive}`}>Catalog</button></a>
            </div>
        </div>

    )
}

export default Banner