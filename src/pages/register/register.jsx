import styles from  './Register.module.css';
import { LoginIcon, PasswordIcon } from 'icons';
import { MyInput } from "components";
import { ArrowIcon } from "icons";
import { useState } from 'react';


const Register = () => {

    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    

    return (
        <div className={styles.register}>
            <img src={<ArrowIcon/>} alt="arrow"/>
            <h1>Создать аккаунт</h1>
            <p>Имя</p>
            <MyInput label={'Имя'}/>
            <p>Фамилия</p>
            <MyInput label={'Фамилия'}/>
            <p>Отчество</p>
            <MyInput label={'Отчество'}/>
            <div className={styles.divider}></div>
            <div className={styles.login}>
                <p>Логин</p>
                <MyInput label={'Логин'}/>
                <p>Пароль</p>
                <MyInput label={'Пароль'}/>
            </div>
        </div>
     );
}

export default Register;
