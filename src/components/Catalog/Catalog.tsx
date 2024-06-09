import React from "react";
import Card from "../Card/Card.tsx";
import container from './catalog.module.css'

const Catalog = () => {
    return(
        <div className={container.catalog}>
            <Card />
        </div>
    )
}

export default Catalog