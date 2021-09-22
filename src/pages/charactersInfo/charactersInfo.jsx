import styles from  './charactersInfo.module.css';
import { Link, useHistory, useParams } from "react-router-dom";

import { Avatar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { ArrowIcon } from "icons";
import { useEffect } from 'react';

import { getCharaterInfo } from 'utils/api/characters';
import { useState } from 'react';

import { Episodes } from 'components';

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
    const history = useHistory();

    useEffect(() => {
        const fetchChacterInfo = async () => {
            const info = await getCharaterInfo(id);
            setInfo(info.data)
        }
        fetchChacterInfo()
    },[id])

    function handleClick() {
        history.goBack();
      }
    return (
        <>
            <div className={styles.wrapper}> 
            <IconButton aria-label="delete" className={classes.position} size="small" onClick={handleClick}>
                <ArrowIcon />
            </IconButton>
                <div className={styles.wrapper__title}>
                    <Avatar alt={info.imageName} src={info.imageName}  className={classes.large} />
                    <Typography variant="h4" style={{textAlign: 'center'}}>
                        {info.fullName}
                    </Typography>
                    {/* <p> раздробить */}
                    <Typography variant="body1" gutterBottom>
                    {['Живой', 'Мертый', 'Неизвестно'][info.status]}
                    </Typography>
                    {/* <p style={{color: '#43D049', textTransform: 'uppercase', fontSize: 10}}>{['Живой', 'Мертый', 'Неизвестно'][info.status]}</p>  */}
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
                    <div style={{display: 'flex' , justifyContent: 'space-between', marginTop: 32}}>
                    <p>Эпизоды</p>
                    <Link to='#' style={{fontSize:12, color: '#5B6975', textDecoration: 'none'}}>Все эпизоды</Link>
                    </div>
                </div>
            </div>
            <Episodes data={info.episodes}/>
        </>
     );
}

export default CharactersInfo;
