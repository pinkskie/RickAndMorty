import { Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { VectorIcon } from "icons";



const useStyles = makeStyles((theme) => createStyles({
    root: {
      display: "flex",
      flexDirection: "column"
    },
    status: {
      margin: 0,
      textTransform: "uppercase",
      fontSize:'10px'
    }
  }));

const Episodes = ({data}) => {
    const classes = useStyles()


    return (
        <>
        <List>
        {data?.length && data.map(item => (
          <ListItem to={`/episodesInfo/${item.id}`} component={Link} key={item.id} alignItems="flex-start" button>
            <ListItemAvatar>
            <Avatar alt={item.imageName} src={item.imageName}/>
            </ListItemAvatar>
            <ListItemText
              primary={
                <div className={classes.root}>
                  <p className={classes.status}>Cерия {item.series}</p>
                  {item.name} 
                </div>
              }
              secondary={dayjs(item.premiere).locale('ru').format('DD MMMM YYYY') }
            />
            <ListItemSecondaryAction>
              <VectorIcon/>
            </ListItemSecondaryAction>
            
          </ListItem>
        ))}
      </List>   
        </>
     );
}

export default Episodes;
