// import styles from  './Login.module.css';
import { InputAdornment, TextField, IconButton } from "@material-ui/core";
import { LoginIcon, PasswordIcon } from 'icons';
import { Button } from '@material-ui/core';
import LoginImage from '../../assets/login.png'
import { signIn } from "utils/api/login";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const handleSubmit = () => {
        signIn(userName, password)
    }

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <>
            <div>
                <img src={LoginImage} alt="image" />
            </div>
                <div style={{padding: 16}}>
                    <p style={{margin:'8px 12px'}}>Логин</p>
                    <TextField 
                        variant='outlined'
                        placeholder={'Логин'}
                        fullWidth
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <LoginIcon/>
                                </InputAdornment>
                            )
                        }}
                        />
                        {/* borderRadius */}
                    <div style={{marginTop: 10}}> 
                        <p style={{margin:'8px 12px'}}>Пароль</p>
                        <TextField 
                            variant='outlined'
                            placeholder={'Пароль'}
                            fullWidth
                            value={password}
                            onChange={e => setPassword(e.target.value)}
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
