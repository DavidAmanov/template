import React from "react";
import Card from "../Card/Card";
import catalogCss from './catalog.module.css'

const Catalog = () => {
    return(
        <>
        <section className={catalogCss.section}>
            <div className={catalogCss.section__wrapper}>
                <h2 className={catalogCss.section__h2}>Catalog</h2>
                <div className={catalogCss.catalog}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
        </>
    )
}

export default Catalog