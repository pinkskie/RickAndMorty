import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { Typography, Divider, Grid, Avatar, makeStyles } from "@material-ui/core";
import { ListView, Title, GoBack, Status } from 'components';

import { getCharaterInfo } from 'utils/api/characters';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  },
  spacing: {
    padding: 16
  }
}));

const CharactersInfo = () => {
  const { id } = useParams();
  const [info, setInfo] = useState();
  const classes = useStyles();

  useEffect(() => {
    const fetchChacterInfo = async () => {
      const info = await getCharaterInfo(id);
      setInfo(info.data)
    }
    fetchChacterInfo()
  }, [id]);

  return (
    <>
      <GoBack />
      <Grid container className={classes.spacing}>
        <Grid item xs={12} container alignItems="center" direction="column">
          <Avatar src={info.imageName} alt={info.imageName} className={classes.avatar} />
          <Typography variant="h4">
            {info.fullName}
          </Typography>
          <Status status={info.status} />
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 32, marginTop: 32 }}>
          <Typography variant="body2">{info.about}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" color="secondary">Пол</Typography>
          <Typography variant="body2">{['Мужской', 'Женский'][info.gender]}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" color="secondary">Раса</Typography>
          <Typography variant="body2">{info.race}</Typography>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 32, marginTop: 32 }}>
          <Typography variant="caption" color="secondary">Место рождения</Typography>
          <Typography variant="body2">{info.placeOfBirth?.name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" color="secondary">Местоположение</Typography>
          <Typography variant="body2">{info.location?.name}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Title secondary="Все эпизоды" to="/episodes">Эпизоды</Title>
      <ListView data={info.episodes} />
    </>
  );
}

export default CharactersInfo;
