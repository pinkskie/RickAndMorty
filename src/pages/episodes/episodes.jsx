import { useState, useEffect } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ListView, SearchBar} from 'components';

import { getAllEpisodes } from 'utils/api/episodes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  content: {
    backgroundColor: theme.palette.background.default
  }
}));

const Episodes = () => {
  const [value, setValue] = useState(1);
  const [data, setData] = useState();
  const classes = useStyles();

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchEpisodesData =  async () => {
      const info = await getAllEpisodes(value)
      if (info?.data.length) {
        setData(info.data)
      }
    }
    fetchEpisodesData()
  },[value]);

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
        <ListView data={data} />
      </div>
    </>
  );
}

export default Episodes;
