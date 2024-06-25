import PromocodeCss from './PromocodeCss.module.css'

const PromocodeField = () => {
    return(<>
        <div className={PromocodeCss.promocode}>
            <div className={PromocodeCss.promocode__field}>
                <input type="text" className={PromocodeCss.promocode__input} placeholder="Promocode" />
            </div>
            <div className={PromocodeCss.promocode__text}>
                To take advantage of the discount, enter the promotional code
            </div>
        </div>
    </>)
}
export default PromocodeField