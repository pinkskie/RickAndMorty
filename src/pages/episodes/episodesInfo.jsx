import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Typography, Divider, Grid } from '@material-ui/core';
import { ListView, Title, GoBack, Status } from "components";

import { getEpisodesInfo } from 'utils/api/episodes';

import dayjs from 'dayjs'
import 'dayjs/locale/ru'

const EpisodesInfo= () => {
  const { id } = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    const fetchEpisodesInfo = async () => {
      const info = await getEpisodesInfo(id);
      setInfo(info.data)
    }
    fetchEpisodesInfo();
  }, [id]);

  return (
    <>
      <img src={info?.imageName} alt={info?.name} style={{ width: "100%" }} />
      <GoBack />
      <Grid container style={{ padding: 16 }}>
        <Grid item xs={12} container alignItems="center" direction="column">
          <Typography variant="h4">{info?.name}</Typography>
          <Status status={info?.series} isCharacter={false} />
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 32, marginTop: 32 }}>
          <Typography variant="body2">{info?.plot}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" color="secondary">Премьера</Typography>
          <Typography variant="body2">{dayjs(info?.premiere).locale('ru').format('DD MMMM YYYY')}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Title>Персонажи</Title>
      <ListView data={info?.characters} character />
    </>
  );
}

export default EpisodesInfo;
