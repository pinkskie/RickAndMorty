// import styles from  './Characters.module.css';
import SearchBar from "../../components/SearchBar/SearchBar"
import { useState,useEffect } from 'react';
import getAllCharacters from './../../utils/api/characters';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

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
    
    const [inputText, setInputText] = useState('')
    const [searchResult, setSearchResult] = useState([])
    
    const handleChange = e => { 
        setInputText(e.target.value);
    } 
    return (
        <>
        <SearchBar 
          label='Найти персонажа'
          onChange={handleChange}
        />
        <List>
            {data.map(character => (
                <ListItem key={character.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Link to='/charactersInfo'><Avatar alt={character.fullName} src={character.imageName}/></Link>
                </ListItemAvatar>
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
