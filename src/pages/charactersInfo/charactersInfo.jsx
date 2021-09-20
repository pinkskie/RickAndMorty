import styles from  './charactersInfo.module.css';
import { Link, useParams } from "react-router-dom";

import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { ArrowIcon } from "icons";
import { useEffect } from 'react';

import { getCharaterInfo } from 'utils/api/characters';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  }));

const CharactersInfo = () => {
    const [info , setInfo] = useState('')
    const { id }= useParams()
    const classes = useStyles()

    useEffect(() => {
        const fetchChacterInfo = async () => {
            const info = await getCharaterInfo(id);
            setInfo(info.data)
        }
        fetchChacterInfo()
    },[id])

    return (
        <div className={styles.wrapper}> 
            <Link to='/'><ArrowIcon/></Link>
            <div className={styles.wrapper__title}>
                <Avatar alt={info.imageName} src={info.imageName}  className={classes.large}/>
                <Typography variant="h4">
                    {info.fullName}
                </Typography>
                {/* <p> раздробить */}
                <p style={{color: '#43D049', textTransform: 'uppercase', fontSize: 10}}>{['Живой', 'Мертый', 'Неизвестно'][info.status]}</p> 
            </div>
            <div className={styles.wrapper__content}>
                <p>{info.about}</p>
                <div style={{display: 'flex', gap: 146}}>
                    {/* div раздробить */}
                    <div>
                        <span>Пол</span>
                        <p>{['Мужской', 'Женский'][info.gender]}</p>
                    </div>
                    <div>
                        <span>Раса</span>
                        <p>{info.race}</p>
                    </div>
                </div>
                <div>
                    <span>Место рождения</span>
                    <p>{info.placeOfBirth?.name}</p>
                </div>
                <div>
                    <span>Местоположение</span>
                    <p>{info.location?.name}</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.episodes}>
                <div style={{}}>
                <p>Эпизоды</p>
                <span>Все эпизоны</span>
                </div>
            </div>
        </div>
     );
}

export default CharactersInfo;
