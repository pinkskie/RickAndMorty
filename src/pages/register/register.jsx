import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import { MyInput } from "components";
import { LoginIcon, PasswordIcon, ArrowIcon } from "icons";

import { signUp } from "utils/store/login";
import { useUser } from "utils";

import styles from  "./Register.module.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [user] = useUser();

  if (user.succeeded) {
    history.push("/");
  }

  const handleSubmit = async () => {
    const res = await signUp({ firstName, lastName, patronymic, userName, password });
    if (res?.succeeded) {
      history.push("/login");
    }
  };

  return (
    <div className={styles.register}>
      <Link to='/login'><ArrowIcon/></Link>
      <h1>Создать аккаунт</h1>
      <MyInput 
        label='Имя'
        placeholder='Имя'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <MyInput 
        label='Фамилия'
        placeholder='Фамилия'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <MyInput 
        label='Отчество'
        placeholder='Отчество'
        value={patronymic}
        onChange={e => setPatronymic(e.target.value)}
      />
      <div className={styles.divider}></div>
      <div className={styles.login}>
        <MyInput 
          label='Логин'
          placeholder='Логин'
          value={userName}
          onChange={e => setUserName(e.target.value)}
          icon={<LoginIcon/>}
        />
        <MyInput 
          type='password'
          label='Пароль'
          placeholder='Пароль'
          value={password}
          onChange={e => setPassword(e.target.value)}
          icon={<PasswordIcon/>}
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
};

export default Register;
