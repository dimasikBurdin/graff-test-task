import React from "react";
import './requestForm.css';
import { useForm } from 'react-hook-form';

type TProps = {
    dateInfo: string
}

export const RequestForm:React.FC<TProps> = React.memo((props) => {
    const {register, handleSubmit, watch, formState: {errors} } = useForm();

    function onSubmit() {

    }

    return <div className="request-form-container">
        {props.dateInfo}
        <form className="request-form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("phone", {required: true})} placeholder="Номер телефона"/>
            {errors.phone && <span>Заполни</span>}
            <input {...register("email", { required: true })} placeholder="Email" />
            {errors.email && <span>Заполни</span>}
            <input {...register("name", { required: true })} placeholder="Ваше имя" />
            {errors.name && <span>Заполни</span>}
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="submit" value={'Записаться на просмотр'}/>
        </form>
    </div>
})