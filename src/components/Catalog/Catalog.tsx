import React from "react";
import Card from "../Card/Card";
import container from './catalog.module.css'

const Catalog = () => {
    return(
        <div className={container.catalog}>
            <Card />
        </div>
    )
}

export default Catalog