// import styles from  './Locations.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SearchBar } from 'components';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

import { getAllLocations } from 'utils/api/locations';


const useStyles = makeStyles({
    root: {
      margin:16,
      borderRadius: 8,
      marginBottom: 24,
    },
    media: {
      height: 150,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
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
            // ListItem ? 
            <Card className={classes.root}>
                <CardActionArea>
                <Link to={`/locationsInfo/${locations.id}`} key={locations.id} className={classes.link}>
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
                </Link>
                </CardActionArea>
            </Card>
        ))}
        </>
     );
}

export default Locations;
