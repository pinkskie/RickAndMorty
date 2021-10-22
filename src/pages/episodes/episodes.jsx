import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tabs, Tab, Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import { ListView, SearchBar} from "components";

import { getAllEpisodes, episodesLoading, getEpisodes } from "utils/store/episodes";

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
  const {list, loading} = useSelector(state => state.episodes);
  const dispatch = useDispatch();
  const classes = useStyles();

  const setData = useCallback((data) => dispatch(getEpisodes(data)), [dispatch]);
  const setLoading = useCallback(() => dispatch(episodesLoading()), [dispatch]);

  useEffect(() => {
    const fetchEpisodesData =  async () => {
      try {
        setLoading();
        const info = await getAllEpisodes();
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
  }, [setData, setLoading ]);

  return (
    <>
      <SearchBar label="Найти эпизод" hideFilter />
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {[1,2,3,4].map(i => <Tab key={i} value={i} label={`Сезон ${i}`} />)}
        </Tabs>
        <ListView data={list.filter(item => item?.season == value).sort((a, b) => a.series - b.series)} />
        <Backdrop open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
};

export default Episodes;
