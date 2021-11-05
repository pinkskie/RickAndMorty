import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Avatar, Button, makeStyles } from "@material-ui/core";
import { MyInput } from "components";
import { ArrowIcon } from "icons";

import { updateProfile } from "utils/store/login/api.login";
import { setProfile } from "utils/store/login/actions.login";

const useStyles = makeStyles((theme) => ({
  position: {
    padding: 16,
    marginBottom: 32
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  span: {
    color: "#5B6975",
    fontSize: 10,
    textTransform: "uppercase",
    marginLeft:16,
    marginTop:40
  },
  avatar: {
    width:150,
    height: 150,
    marginRight: 0,
    marginBottom: 20
  },
  input: {
    display: "none"
  },
  button: {
    color: theme.palette.default.main,
    textAlign: "center",
    padding:0,
  },
  wrapper: {
    padding: 26,
  },
  saveBtn: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0
  }
}));

const EditProfile = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const profile = useSelector(state => state.user.profile);

  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [patronymic, setPatronymic] = useState(user?.patronymic);

  const handleClick = async () => {
    try {
      const userInfo = {
        firstName,
        lastName,
        patronymic
      };
      const res = await updateProfile({...userInfo, userId: user.id});
      if (res.succeeded) {
        dispatch(setProfile({...profile, ...userInfo, fullName: `${firstName} ${lastName} ${patronymic}` }));
      }
    } catch (err) {
      console.log(err);
    } finally {
      history.push("/settings"); // + модалка
    }
  };
  
  return (
    <>
      <Button aria-label="delete" size="small" onClick={() => history.goBack()}  className={classes.position}>
        <ArrowIcon /> <span style={{marginLeft:24, fontSize:20}}>Редактировать профиль</span>
      </Button>
      <div className={classes.root}>
        <Avatar className={classes.avatar}/>
        <label htmlFor="contained-button-file">
          <input accept="image/*" id="contained-button-file" multiple type="file" className={classes.input}/>
          <Button variant="text" component="span" className={classes.button}>
            Изменить фото
          </Button>
        </label>
      </div>
      <span className={classes.span}>Профиль</span>
      <div className={classes.wrapper}>
        <MyInput 
          placeholder="Имя" 
          label="Имя" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <MyInput 
          placeholder="Фамилия"  
          label="Фамилия" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <MyInput 
          placeholder="Отчество"  
          label="Отчество"
          value={patronymic}
          onChange={(e) => setPatronymic(e.target.value)}
        />
        <Button 
          variant='contained'
          color="primary"
          fullWidth
          type="submit"
          onClick={handleClick}
          className={classes.saveBtn}
        >
          Сохранить
        </Button>
      </div>
    </>
  );
};

export default EditProfile;
