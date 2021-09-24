import { useState,useEffect } from 'react';

import { ListView, SearchBar } from "components"
import { getAllCharacters, getCharactersByFilter } from 'utils/api/characters';

const Characters = () => {
  const [inputText, setInputText] = useState('')
  const [data,setData] = useState([]);

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
      <ListView data={data} character hideAction />
    </>
  );
}

export default Characters;
