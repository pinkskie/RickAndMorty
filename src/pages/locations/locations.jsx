import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Backdrop, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SearchBar } from 'components';

import { getAllLocations } from 'utils/api/locations';

const useStyles = makeStyles({
  root: {
    margin:16,
    borderRadius: 8,
    marginBottom: 24,
  },
  media: {
    height: 150,
  }
});

const Locations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const locations = await getAllLocations();
        if (locations?.data?.length) {
          setData(locations.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);
      
  return (
    <>
      <SearchBar label='Найти локацию'/>
      {data.map(locations => (
        <Card className={classes.root} key={locations.id}>
          <CardActionArea onClick={() => history.push(`/locations/${locations.id}`)}>
            <CardMedia
              component="img"
              className={classes.media}
              image={locations.imageName}
              title={locations.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {locations.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {locations.type} • {locations.measurements}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default Locations;
