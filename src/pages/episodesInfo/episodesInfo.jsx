import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

import { Typography, makeStyles, IconButton, Divider } from '@material-ui/core';
import { ListView } from 'components';
import { ArrowIcon } from 'icons';

import { getEpisodesInfo } from 'utils/api/episodes';

import dayjs from 'dayjs'
import 'dayjs/locale/ru'

const useStyles = makeStyles({
  root: {
    width:'100%'
  },
  position: {
    position: 'absolute',
    top:32,
    left: 16,
    zIndex: 1
  },
  about: {
    color: '#22A2BD',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '10px'
  }
}) 

const EpisodesInfo= () => {
  const { id } = useParams();
  const [info, setInfo] = useState();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const fetchEpisodesInfo = async () => {
      const info = await getEpisodesInfo(id);
      setInfo(info.data)
    }
    fetchEpisodesInfo();
  },[id]);

  const handleClick = () => history.goBack();

  return (
    <>
      <img src={info?.imageName} alt={info?.name} className={classes.root}/>
      <IconButton aria-label="delete" className={classes.position} size="small" onClick={handleClick}>
        <ArrowIcon />
      </IconButton>
      <div style={{padding: 16, borderRadius: 8}}>
        <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center'}}>
          {info?.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.about}>
          Серия {info?.series}
        </Typography>
        <Typography 
          variant="body2" 
          color="inherit" 
          component="p"
          style={{marginTop:32}}
        >
          {info?.plot}
        </Typography>
        <Typography 
          gutterBottom variant="h5" 
          component="h3"
          style={{marginTop:32,color: '#5B6975', fontSize: 12}}
        >
          Премьера
        </Typography>
        <Typography variant="body2" component="p">
          {dayjs(info?.premiere).locale('ru').format('DD MMMM YYYY')}
        </Typography>
      </div>
      <Divider light style={{marginTop: 32}}/>
      <Typography 
        variant="h5" 
        component="h3"
        style={{marginTop:12, padding:16}}
      >
        Персонажи
      </Typography>
      <ListView data={info?.characters} variant='circular' character/>
    </>
  );
}

export default EpisodesInfo;
