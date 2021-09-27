import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Backdrop, CircularProgress } from '@material-ui/core';
import { ListView, SearchBar } from "components";

import ChangeView from './ChangeView';
import GridView from './GridView';

import { getAllCharacters, getCharactersByFilter } from 'utils/api/characters';
import { charactersLoading, getCharacters } from 'utils/store/actions/characters';

const Characters = () => {
  const [inputText, setInputText] = useState('')
  const [view, setView] = useState('list');
  const dispatch = useDispatch();
  const { list , loading} = useSelector(state => state.characters);

  const setLoading = () => {
    dispatch(charactersLoading())
  }
  const setData = (data) => {
    dispatch(getCharacters(data))
  }

  // изменить вид списка
  const handleChangeView = () => {
    setView(view === 'list' ? 'grid' : 'list');
  }

  // получить список всех персонажей при первом рендере
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading()
        const characters = await getAllCharacters(); // асинхронные запросы когда апишки?
        if(characters?.data?.length) {
          setData(characters.data) 
        }
      } catch (error) {
        console.error(error)
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
      <ChangeView view={view} onChange={handleChangeView} count={list?.length} />
      {view === 'list' && <ListView data={list} character hideAction />}
      {view === 'grid' && <GridView data={list} />}
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default Characters;
