import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Dialog, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import { MyInput } from "components";
import { LoginIcon, PasswordIcon } from "icons";

import { signIn } from "utils/store/login";
import LoginImage from "../../assets/login.png";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isWrong, setIsWrong] = useState(false);

  const handleSubmit = async () => {
    const res = await signIn({ userName, password });
    if (res?.StatusCode === 403) {
      setIsWrong(true);
      return;
    }
    // если все ок, то сохраняем юзера в локал сторедж и редиректим на главную
    if (res?.succeeded) {
      localStorage.setItem("user", JSON.stringify({ userName, ...res }));
      window.location.href = "/";
    }
  };
  
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={LoginImage} alt="Logo" />
      </div>
      <div style={{padding: 16}}>
        <MyInput
          placeholder="Логин"
          value={userName}
          label="Логин"
          onChange={e => setUserName(e.target.value)}
          icon={<LoginIcon/>}
        />
        <MyInput
          placeholder="Пароль"
          value={password}
          label="Пароль"
          onChange={e => setPassword(e.target.value)}
          icon={<PasswordIcon/>}
          type="password"
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
        <p style={{textAlign: "center", marginTop: 24}}>
          У вас все еще нету аккаунта ? <Link to='/register' style={{color: "#43D049", textDecoration: "none"}}>Создать</Link>
        </p>
      </div>
      <Dialog
        open={isWrong}
        onClose={() => setIsWrong(false)}
        maxWidth="xs"
        style={{ padding: 32 }}
        fullWidth
      >
        <DialogTitle>Ошибка</DialogTitle>
        <DialogContent>
          <Typography>Введен неверные логин или пароль</Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setIsWrong(false)}
            style={{ marginBottom: 16, marginTop: 16 }}
            fullWidth
          >
            Ok
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
