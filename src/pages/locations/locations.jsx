// import styles from  './Locations.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

import { SearchBar } from 'components';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

import { getAllLocations } from 'utils/api/locations';


const useStyles = makeStyles({
    root: {
      maxWidth: 343,
      borderRadius: 8,
      marginBottom: 24,
      marginLeft: 16
    },
    media: {
      height: 150,
    },
  });

const Locations = () => {
    const classes = useStyles();
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchLocations = async () => {
            const locations = await getAllLocations();
            if(locations?.data?.length) {
                setData(locations.data)
            }
        } 
        fetchLocations()
    },[])
        
    return (
        <>
        <SearchBar label='Найти локацию'/>
        {data.map(locations => (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={locations.imageName}
                    title={locations.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {locations.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/* криво */}
                        {locations.type} • {locations.measurements}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        ))}
        </>
     );
}

export default Locations;
