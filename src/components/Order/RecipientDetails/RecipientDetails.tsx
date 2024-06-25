import RecipientDetailsCss from './RecipientDetailsCss.module.css'
import Slash from '../../../img/ico/slash__block.png'

const RecipientDetails = () => {
    return(<>
        <div className={`${RecipientDetailsCss.block} ${RecipientDetailsCss.Recipient}`}>
            <div className={RecipientDetailsCss.name}>
                <span>4</span>
                <img src={Slash} alt="slash" />
                <span>Recipient details</span>
            </div>
            <div className={`${RecipientDetailsCss.block__wrapper} ${RecipientDetailsCss.block__wrapper_padding}`}>
                <div>Enter the details of the order recipient</div>
                <div className={RecipientDetailsCss.Recipient__details}>
                    <div className={RecipientDetailsCss.Recipient__initials}>
                        <div className={RecipientDetailsCss.Recipient__field}>
                            <input className={RecipientDetailsCss.Recipient__input} name="name" type="text" placeholder="Name" required />
                        </div>
                        <div className={RecipientDetailsCss.Recipient__field}>
                            <input className={RecipientDetailsCss.Recipient__input} name="last-name" type="text" placeholder="Last name" required />
                        </div>
                    </div>
                </div>
                <div className={RecipientDetailsCss.Recipient__details}>
                    <div className={RecipientDetailsCss.Recipient__contacts}>
                        <div className={RecipientDetailsCss.Recipient__field}>
                            <input className={RecipientDetailsCss.Recipient__input} name="Mobile-Phone" type="text" placeholder="Mobile Phone" required />
                        </div>
                        <div className={RecipientDetailsCss.Recipient__field}>
                            <input className={RecipientDetailsCss.Recipient__input} name="E-mail" type="text" placeholder="Email" required />
                        </div>
                    </div>
                </div>
                <div className={RecipientDetailsCss.Recipient__details}>
                    <div className={RecipientDetailsCss.textarea}>
                        <textarea className={RecipientDetailsCss.textarea__comment} name="comment" placeholder="Comment"></textarea>
                    </div>
                </div>
            </div>
        </div>
                        
    </>)
}

export default RecipientDetails