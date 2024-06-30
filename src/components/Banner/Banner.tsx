import React from 'react'
import BannerCss from './Banner.module.css'
import { Link } from 'react-router-dom'



const Banner = () => {
    return(
        <div className={BannerCss.banner}>
            <div className={BannerCss.banner__wrapper}>
                <div className={BannerCss.banner__text}>
                    <span className={BannerCss.text}>Winter, fashion<br/>
                    and technologies</span>
                </div>    
                <div className={BannerCss.banner__text2}>[new collection]</div>
                <h1 className={BannerCss.banner__name}>Merch</h1>
                <Link to="/catalog"><button className={`${BannerCss.button} ${BannerCss.button_cursor} ${BannerCss.button_main} ${BannerCss.button_banneradaptive}`}>Catalog</button></Link>
            </div>
        </div>

    )
}

export default Banner