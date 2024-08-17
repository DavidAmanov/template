import React from "react";
import BannerCss from "./Banner.module.css";
import { Link } from "react-router-dom";
import ButtonOval from "../Button/OvalButton/ButtonOval";

const Banner = () => {
  return (
    <div className={BannerCss.banner}>
      <div className={BannerCss.banner__wrapper}>
        <div className={BannerCss.banner__text}>
          <span className={BannerCss.text}>
            Winter, fashion
            <br />
            and technologies
          </span>
        </div>
        <div className={BannerCss.banner__text2}>[new collection]</div>
        <h1 className={BannerCss.banner__name}>Merch</h1>
        <Link to="/catalog">
          <ButtonOval text="Catalog" color="black" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
