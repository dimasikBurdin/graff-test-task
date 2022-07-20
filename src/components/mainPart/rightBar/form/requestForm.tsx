import React, { useState } from "react";
import './requestForm.css';
import { useForm, Controller } from 'react-hook-form';
import { Box, createTheme, FormControl, FormHelperText, Input, makeStyles, TextField, ThemeProvider, useFormControl, withStyles } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

type TProps = {
    dateInfo: string
    onSubmit: () => void
}

type IFormInput = {
    phone: string
    email: string
    firstName: string
}

export const RequestForm:React.FC<TProps> = React.memo((props) => {    
    const {control, handleSubmit} = useForm<IFormInput>();
    const [isError, setIsError] = useState(false);

    function onSubmit(data: IFormInput) { 
        if(!(data.email && data.firstName && data.phone)) {
            setIsError(true);
            return
        }
        console.log(data)
        props.onSubmit()
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
                    <TextField 
                        {...field}
                        // variant={"filled"}
                        variant={isError && field.value === '' ? 'outlined' : "filled"}
                        // required
                        size="medium"
                        label='Номер телефона'
                        autoComplete="off"
                        type={'number'}
                        error={isError && field.value === ''}
                        helperText={isError && field.value === '' ? 'Заполните поле' : ''}
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
                        // variant={"filled"}
                        variant={isError && field.value === '' ? 'outlined' : "filled"}
                        size="medium"
                        label='E-mail'
                        // required
                        type={"email"}
                        autoComplete="off"
                        error={isError && field.value === ''}
                        helperText={isError && field.value === '' ? 'Заполните поле' : ''}
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
                        // variant={"filled"}
                        variant={isError && field.value === '' ? 'outlined' : "filled"}
                        size="medium"
                        label='Ваше имя'
                        // required
                        type={'text'}
                        autoComplete="off"
                        error={isError && field.value === ''}
                        helperText={isError && field.value === '' ? 'Заполните поле' : ''}
                    />
                }
            />
            <input className="request-form-submit-button" type="submit" value={'Записаться на просмотр'}/>
        </form>
    </div>
})