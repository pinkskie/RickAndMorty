import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllLocations, getLocationsInfo } from "utils/api/locations";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getAllCharacters } from "utils/api/characters";
import { Episodes } from "components";

const useStyles = makeStyles({
    root: {
        width:'100%'
    }
}) 

const LocationsInfo = () => {
    const [info, setInfo] = useState('')
    const [data, setData] = useState('')
    const { id } = useParams()
    const classes = useStyles();

    useEffect(() => {
        const fetchLocationsInfo = async () => {
            const info = await getLocationsInfo(id);
            setInfo(info.data)
        } 
        fetchLocationsInfo();
    },[id])

    return (
        <>
        <img src={info.imageName} alt='photo' className={classes.root}/>
        <div style={{padding: 16, borderRadius: 8}}>
            <Typography gutterBottom variant="h5" component="h2">
                {info.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {/* криво */}
                {info.type} • {info.measurements}
            </Typography>
            <Typography 
            variant="body2" 
            color="inherit" 
            component="p"
            style={{marginTop:32}}>
                {info.about}
            </Typography>
            <Typography 
                gutterBottom variant="h5" 
                component="h3"
                style={{marginTop:32}}>
                Персонажи
            </Typography>
        </div>
        <Episodes data = {info.characters} variant = 'circular' character/>
        </>
     );
}

export default LocationsInfo;
