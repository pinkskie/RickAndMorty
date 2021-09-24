import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { SearchBar } from "components"
import { getAllCharacters, getCharactersByFilter } from 'utils/api/characters';

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
  const [inputText, setInputText] = useState('')
  const [data,setData] = useState([]);

  const classes = useStyles();

  // получить список всех персонажей при первом рендере
  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = await getAllCharacters(); // асинхронные запросы когда  апишки?
      if(characters?.data?.length) {
        setData(characters.data) 
      }
    }
     // получить всех персонажей если поиск пустой
    !inputText.length && fetchCharacters();
  }, [inputText]);
  
  const handleChange = e => { 
    setInputText(e.target.value);
  } 

    // Поиск по имени
  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharactersByFilter({
        Name: inputText,
        Gender: 0,
        Status: 0
      });
      setData(data?.data);
    }
    // поиск по имени если введены минимум 3 буквы
    inputText.length >= 3 && fetchCharacters();
  }, [inputText]);

  return (
    <>
      <SearchBar 
        label='Найти персонажа'
        value={inputText}
        onChange={handleChange}
      />
      
      <List>
        {data.map(character => (
          <ListItem to={`/characters/${character.id}`} component={Link} key={character.id} alignItems="center" button>
            <ListItemAvatar>
              <Avatar alt={character.fullName} src={character.imageName} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <div className={classes.root}>
                  <p className={classes.status}>{['Живой', 'Мертый', 'Неизвестно'][character.status]}</p>
                  {character.fullName}
                </div>
              }
              secondary={`${character.race}, ${['Мужской','Женский'][character.gender]}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Characters;
