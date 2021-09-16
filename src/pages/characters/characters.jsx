// import styles from  './Characters.module.css';
import SearchBar from "../../components/SearchBar/SearchBar"
import { useState,useEffect } from 'react';
import getAllCharacters from './../../utils/api/characters';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  status: {
    margin: 0,
    textTransform: "uppercase",
    fontSize:'10px'
    
  }
}));


const Characters = () => {
    const [data,setData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const fetchCharacters = async () => {
            const characters = await getAllCharacters();
            if(characters?.data?.length) {
                setData(characters.data)
            }
        }
        fetchCharacters();
    },[]);

    return (
        <>
        <SearchBar label='Найти персонажа'/>
        <List>
            {data.map(character => (
                <ListItem key={character.id}alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={character.fullName} src={character.imageName} />
                </ListItemAvatar>
                {/* <span>{['Живой', 'RIP', 'X3'][character.status]}</span> */}
                <ListItemText
                  primary={<div className={classes.root}>
                    <p className={classes.status}>{['Живой', 'Мертый', 'Неизвестно'][character.status]}</p>
                    {character.fullName}
                    </div>}
                  secondary={`${character.race}, ${['Мужской','Женский'][character.gender]}`}
                   
                  
                />
              </ListItem>
            ))}
        </List>
        </>
     );
}

export default Characters;
