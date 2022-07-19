import React, { useState } from "react";
import './requestForm.css';
import { useForm, Controller } from 'react-hook-form';
import { Box, FormControl, FormHelperText, Input, TextField, useFormControl } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";


type TProps = {
    dateInfo: string
}

type IFormInput = {
    phone: string
    email: string
    firstName: string
}

export const RequestForm:React.FC<TProps> = React.memo((props) => {
    const {control, handleSubmit} = useForm<IFormInput>();

    function onSubmit(data: IFormInput) { 
        console.log(data)
    }

    return <div className="request-form-container">
        <span className="request-form-date">
            {props.dateInfo}
        </span>     
        <form className="request-form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="phone"
                control={control}
                defaultValue=''                
                render={({ field }) => 
                <MuiTelInput 
                    {...field} 
                    required
                    size="medium"
                    label='Номер телефона'
                />
                }
            />
            <Controller
                name="email"
                control={control}
                defaultValue=''
                render={({ field }) => 
                    <TextField
                        {...field} 
                        size="medium"
                        label='E-mail'
                        required
                        type={"email"}
                    />
                }
            />
            <Controller
                name="firstName"
                control={control}
                defaultValue=''
                render={({ field }) => 
                    <TextField
                        {...field} 
                        size="medium"
                        label='Ваше имя'
                        required
                        type={'text'}
                    />
                }
            />
            <input className="request-form-submit-button" type="submit" value={'Записаться на просмотр'}/>
        </form>
    </div>
})