import { useState, useEffect, useCallback } from "react";
import { Tabs, Tab, Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ListView, SearchBar} from "components";

import { getAllEpisodes } from "utils/api/episodes";
import { useDispatch, useSelector } from "react-redux";
import { episodesLoading, getEpisodes } from "utils/store/actions/episodes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  content: {
    backgroundColor: theme.palette.background.default
  }
}));

const Episodes = () => {
  const [value, setValue] = useState(1);
  // const [data, setData] = useState();
  const classes = useStyles();
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {list, loading} = useSelector(state => state.episodes);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const setData = useCallback((data) => dispatch(getEpisodes(data)), [dispatch]);
  const setLoading = useCallback(() => dispatch(episodesLoading()), [dispatch]);


  useEffect(() => {
    
    const fetchEpisodesData =  async () => {
      try {
        setLoading();
        const info = await getAllEpisodes(value);
        if (info?.data.length) {
          setData(info.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEpisodesData();
  },[value, setData, setLoading ]);

  return (
    <>
      <SearchBar label='Найти эпизод' hideFilter />
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {[1,2,3,4,5].map(i => <Tab key={i} value={i} label={`Сезон ${i}`} />)}
        </Tabs>
        <ListView data={list} />
        <Backdrop open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
};

export default Episodes;
