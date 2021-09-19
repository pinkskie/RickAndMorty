import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from '@material-ui/core';
import { MyInput } from "components";
import { LoginIcon, PasswordIcon } from 'icons';

import { signIn } from "utils/api/login";
import LoginImage from '../../assets/login.png'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        signIn({ userName, password })
    }
    
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={LoginImage} alt="Logo" />
            </div>
            <div style={{padding: 16}}>
                <MyInput
                    placeholder={'Логин'}
                    value={userName}
                    label='Логин'
                    onChange={e => setUserName(e.target.value)}
                    icon={<LoginIcon/>}
                />
                <MyInput
                    placeholder={'Пароль'}
                    value={password}
                    label='Пароль'
                    onChange={e => setPassword(e.target.value)}
                    icon={<PasswordIcon/>}
                />
                <Button 
                    variant="contained" 
                    color="primary"
                    fullWidth
                    style={{marginTop:24}}
                    type="button"
                    onClick={handleSubmit}
                >
                    Войти
                </Button>
                <p style={{textAlign: 'center', marginTop: 24}}>
                    У вас все еще нету аккаунта ? <Link to='/register' style={{color: '#43D049', textDecoration: 'none'}}>Создать</Link>
                </p>
            </div>
        </>
    );
}

export default Login;
