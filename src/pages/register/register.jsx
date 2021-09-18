import styles from  './Register.module.css';
import { LoginIcon, PasswordIcon } from 'icons';
import { MyInput } from "components";
import { ArrowIcon } from "icons";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { signUp } from "utils/api/login";


const Register = () => {

    const handleSubmit = () => {
        signUp(firstName, lastName, patronymic, userName, password)
    }
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    

    return (
        <div className={styles.register}>
            <Link to='/login'><ArrowIcon/></Link>
            <h1>Создать аккаунт</h1>
            <p>Имя</p>
            <MyInput 
                label={'Имя'}
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <p>Фамилия</p>
            <MyInput 
                label={'Фамилия'}
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <p>Отчество</p>
            <MyInput 
                label={'Отчество'}
                value={patronymic}
                onChange={e => setPatronymic(e.target.value)}
            />
            <div className={styles.divider}></div>
            <div className={styles.login}>
                <p>Логин</p>
                <MyInput 
                    label={'Логин'}
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <p>Пароль</p>
                <MyInput 
                    label={'Пароль'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
                    Cоздать
            </Button>
        </div>
     );
}

export default Register;
