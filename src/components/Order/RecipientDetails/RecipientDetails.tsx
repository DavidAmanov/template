import RecipientDetailsCss from './RecipientDetailsCss.module.css'
import Slash from '../../../img/ico/slash__block.png'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../context/store';
import { setRecipient } from '../../../context/orderSice';

interface Recipient{
    name: string,
    lastName: string,
    mobilePhone: string,
    email: string,
    comment: string
}

const RecipientDetails = () => {
    const {register, handleSubmit} = useForm<Recipient>();

    const dispatch = useDispatch<AppDispatch>()

    const addRecipient: SubmitHandler<Recipient> = (data) => {
        dispatch(setRecipient({recipient: data}))
        console.log(data)
    }

    return(<>
        <div className={`${RecipientDetailsCss.block} ${RecipientDetailsCss.Recipient}`}>
            <div className={RecipientDetailsCss.name}>
                <span>4</span>
                <img src={Slash} alt="slash" />
                <span>Recipient details</span>
            </div>
            <div className={`${RecipientDetailsCss.block__wrapper} ${RecipientDetailsCss.block__wrapper_padding}`}>
                <div>Enter the details of the order recipient</div>
                <form onSubmit={handleSubmit(addRecipient)}>
                    <div className={RecipientDetailsCss.Recipient__details}>
                        <div className={RecipientDetailsCss.Recipient__initials}>
                            <div className={RecipientDetailsCss.Recipient__field}>
                                <input {...register("name", {required: true })}
                                    className={RecipientDetailsCss.Recipient__input} 
                                    type="text" 
                                    placeholder="Name"
                                />
                            </div>
                            <div className={RecipientDetailsCss.Recipient__field}>
                                <input {...register("lastName", {required: true })} 
                                    className={RecipientDetailsCss.Recipient__input} 
                                    type="text" 
                                    placeholder="Last name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={RecipientDetailsCss.Recipient__details}>
                        <div className={RecipientDetailsCss.Recipient__contacts}>
                            <div className={RecipientDetailsCss.Recipient__field}>
                                <input {...register("mobilePhone", {required: true })}
                                    className={RecipientDetailsCss.Recipient__input} 
                                    type="text" 
                                    placeholder="Mobile Phone"
                                />
                            </div>
                            <div className={RecipientDetailsCss.Recipient__field}>
                                <input {...register("email", {required: true })} 
                                    className={RecipientDetailsCss.Recipient__input} 
                                    type="text" 
                                    placeholder="Email" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className={RecipientDetailsCss.Recipient__details}>
                        <div className={RecipientDetailsCss.textarea}>
                            <textarea {...register("comment", {required: true })} 
                                className={RecipientDetailsCss.textarea__comment} 
                                placeholder="Comment">    
                            </textarea>
                        </div>
                    </div>
                    <button className={RecipientDetailsCss.submit__button} type="submit">Save</button>
                </form>
            </div>
        </div>
                        
    </>)
}

export default RecipientDetails