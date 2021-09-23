import { useState, useEffect } from 'react';
import { Episodes as List, SearchBar} from 'components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import { getAllEpisodes } from 'utils/api/episodes';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
    //   backgroundColor: theme.palette.background.paper,
    },
    content: {
        backgroundColor: theme.palette.background.default
    }
  }));

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
    
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

const Episodes = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [data, setData] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    useEffect(() => {
        const fetchEpisodesData =  async () => {
            const info = await getAllEpisodes(value+1)
            if ( info?.data.length ) {
                setData(info.data)
            }
        } 
        fetchEpisodesData()
        
    },[value])

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
                aria-label="scrollable auto tabs example"
                >
                <Tab label="Сезон 1" {...a11yProps(0)} />
                <Tab label="Сезон 2" {...a11yProps(1)} />
                <Tab label="Сезон 3" {...a11yProps(2)} />
                <Tab label="Сезон 4" {...a11yProps(3)} />
                <Tab label="Сезон 5" {...a11yProps(4)} />
            </Tabs>
            <List data={data} />
        </div>
        </>
     );
}

export default Episodes;
