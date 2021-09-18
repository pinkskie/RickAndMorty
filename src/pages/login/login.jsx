// import styles from  './Login.module.css';
import { InputAdornment, TextField, IconButton } from "@material-ui/core";
import { LoginIcon, PasswordIcon } from 'icons';
import { Button } from '@material-ui/core';
import LoginImage from '../../assets/login.png'
import { signIn } from "utils/api/login";
import { useState } from "react";

const Login = () => {
    const handleSubmit = () => {
        signIn(login,pass)
    }

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    return (
        <>
            <div>
                <img src={LoginImage} alt="image" />
            </div>
                <div style={{padding: 16}}>
                    <span style={{marginLeft: 10}}>Логин</span>
                    <TextField 
                        variant='outlined'
                        placeholder={'Логин'}
                        fullWidth
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <LoginIcon/>
                                </InputAdornment>
                            )
                        }}
                        />
                    <div  style={{marginTop: 10}}>
                        <span style={{marginLeft: 10}}>Пароль</span>
                        <TextField 
                            variant='outlined'
                            placeholder={'Пароль'}
                            fullWidth
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <PasswordIcon/>
                                    </InputAdornment>
                                )
                            }}
                            />
                    </div>
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
