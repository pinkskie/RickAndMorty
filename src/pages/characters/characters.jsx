import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { SearchBar } from "components"
import { getAllCharacters } from 'utils/api/characters';

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
  const [searchResult, setSearchResult] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = await getAllCharacters(); // асинхронные запросы когда  апишки?
      if(characters?.data?.length) {
        setData(characters.data) 
      }
    }
    fetchCharacters();
  },[]);
  
  const handleChange = e => { 
    setInputText(e.target.value);
  } 

  useEffect(() => {
    fetch(`http://173.249.20.184:7001/api/Characters/GetAll?PageNumber=1&PageSize=200${inputText}`)
    .then(res => res.json())
    .then(data => {
        if(data.fullName !== null){
            setSearchResult(data.fullName)
        } else {
            setSearchResult([])
            }
        } 
    )
  },[inputText])

  return (
    <>
      <SearchBar 
        label='Найти персонажа'
        onChange={handleChange}
      />
      <List>
        {data.map(character => (
          <ListItem to="/charactersInfo" component={Link} key={character.id} alignItems="flex-start" button>
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
