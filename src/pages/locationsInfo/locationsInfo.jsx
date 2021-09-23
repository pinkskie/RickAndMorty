import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { getLocationsInfo } from "utils/api/locations";

import { ArrowIcon } from "icons";
import { Episodes } from "components";

import { Typography, makeStyles, IconButton } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width:'100%'
    },
    position: {
        position: 'absolute',
        top:32,
        left: 16,
        zIndex: 1
    }
}) 

const LocationsInfo = () => {

    const [info, setInfo] = useState('')
    const { id } = useParams()
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        const fetchLocationsInfo = async () => {
            const info = await getLocationsInfo(id);
            setInfo(info.data)
        } 
        fetchLocationsInfo();
    },[id])

    function handleClick() {
        history.goBack();
      }
    return (
        <>
        <img src={info.imageName} alt='img' className={classes.root} />
        <IconButton aria-label="delete" className={classes.position} size="small" onClick={handleClick}>
          <ArrowIcon />
        </IconButton>
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
