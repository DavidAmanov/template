import RecipientDetailsCss from './RecipientDetailsCss.module.css'
import Slash from '../../../img/ico/slash__block.png'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../context/store';
import { resetRecipient, setRecipient } from '../../../context/orderSice';
import { useEffect } from 'react';
import { Recipient } from '../../../types/types';

const RecipientDetails = () => {
    const {register, handleSubmit} = useForm<Recipient>();

    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(resetRecipient())
    },[])

    const addRecipient: SubmitHandler<Recipient> = (data) => {
        dispatch(setRecipient(data))
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
                <form className={RecipientDetailsCss.FormWrapper} onSubmit={handleSubmit(addRecipient)}>
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
                            <textarea {...register("comment", {required: false })} 
                                className={RecipientDetailsCss.textarea__comment} 
                                placeholder="Comment">    
                            </textarea>
                        </div>
                    </div>
                    <div className={RecipientDetailsCss.submitButtonField}>
                        <button className={RecipientDetailsCss.submit__button} type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
                        
    </>)
}

export default RecipientDetails