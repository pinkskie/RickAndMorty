import { useState,useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Backdrop, CircularProgress } from "@material-ui/core";
import { ListView, SearchBar } from "components";

import ChangeView from "./ChangeView";
import GridView from "./GridView";

import {
  getAllCharacters,
  getCharactersByFilter,
  getCharacters,
  charactersLoading
} from "utils/store/characters";

const Characters = () => {
  const [inputText, setInputText] = useState("");
  const [view, setView] = useState("list");

  const { list , loading} = useSelector(state => state.characters);
  const dispatch = useDispatch();

  const setLoading = useCallback(() => dispatch(charactersLoading()), [dispatch]);
  const setData = useCallback((data) => dispatch(getCharacters(data)), [dispatch]);

  // изменить вид списка
  const handleChangeView = () => setView(view === "list" ? "grid" : "list");

  // получить список всех персонажей при первом рендере
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading();
        const characters = await getAllCharacters(); // асинхронные запросы когда апишки?
        if(characters?.data?.length) {
          setData(characters.data); 
        }
      } catch (error) {
        console.error(error);
      } 
    };
    // получить всех персонажей если поиск пустой
    !inputText.length && fetchCharacters();
  }, [inputText, setData, setLoading]);
  
  const handleChange = e => { 
    setInputText(e.target.value);
  }; 

  // Поиск по имени
  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharactersByFilter({
        Name: inputText,
        Gender: 0,
        Status: 0
      });
      setData(data?.data);

    };
    // поиск по имени если введены минимум 3 буквы
    inputText.length >= 3 && fetchCharacters();
  }, [inputText, setData]);

  return (
    <>
      <SearchBar 
        label='Найти персонажа'
        value={inputText}
        onChange={handleChange}
      />
      <ChangeView view={view} onChange={handleChangeView} count={list?.length} />
      {view === "list" && <ListView data={list} character hideAction />}
      {view === "grid" && <GridView data={list} />}
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Characters;
