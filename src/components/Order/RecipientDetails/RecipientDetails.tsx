import RecipientDetailsCss from "./RecipientDetailsCss.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../context/store";
import { resetRecipient, setRecipient } from "../../../context/orderSice";
import { useEffect } from "react";
import { Recipient } from "../../../types/types";
import Title from "../Title/Title";

const RecipientDetails = () => {
  const { register, handleSubmit } = useForm<Recipient>();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(resetRecipient());
  }, []);

  const addRecipient: SubmitHandler<Recipient> = (data) => {
    dispatch(setRecipient(data));
  };

  return (
    <>
      <div
        className={`${RecipientDetailsCss.block} ${RecipientDetailsCss.Recipient}`}
      >
        <Title title="Recipient details" number={4} />
        <div className={RecipientDetailsCss.block__wrapper}>
          <div>Enter the details of the order recipient</div>
          <form
            className={RecipientDetailsCss.FormWrapper}
            onSubmit={handleSubmit(addRecipient)}
          >
            <div className={RecipientDetailsCss.Recipient__field}>
              <input
                {...register("name", { required: true })}
                className={RecipientDetailsCss.Recipient__input}
                type="text"
                placeholder="Name"
              />
            </div>
            <div className={RecipientDetailsCss.Recipient__field}>
              <input
                {...register("lastName", { required: true })}
                className={RecipientDetailsCss.Recipient__input}
                type="text"
                placeholder="Last name"
              />
            </div>
            <div className={RecipientDetailsCss.Recipient__field}>
              <input
                {...register("mobilePhone", { required: true })}
                className={RecipientDetailsCss.Recipient__input}
                type="text"
                placeholder="Mobile Phone"
              />
            </div>
            <div className={RecipientDetailsCss.Recipient__field}>
              <input
                {...register("email", { required: true })}
                className={RecipientDetailsCss.Recipient__input}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className={RecipientDetailsCss.textarea}>
              <textarea
                {...register("comment", { required: false })}
                className={RecipientDetailsCss.textarea__comment}
                placeholder="Comment"
              ></textarea>
            </div>
            <div className={RecipientDetailsCss.submitButtonField}>
              <button
                className={RecipientDetailsCss.submit__button}
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecipientDetails;
