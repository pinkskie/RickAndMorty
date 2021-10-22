import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Backdrop, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SearchBar } from "components";

import { getAllLocations, getLocations, locationLoading } from "utils/store/locations";

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

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const {list, loading} = useSelector(state => state.locations);

  useEffect(() => {
    const setLoading = () => {
      dispatch(locationLoading());
    };
  
    const setData = (data) => {
      dispatch(getLocations(data));
    };
    const fetchLocations = async () => {
      try {
        setLoading();
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
  }, [dispatch]);
      
  return (
    <>
      <SearchBar label='Найти локацию'/>
      {list.map(locations => (
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
};

export default Locations;
