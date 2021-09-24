import { Link } from "react-router-dom";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { VectorIcon } from "icons";

import dayjs from 'dayjs'
import 'dayjs/locale/ru'

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  status: {
    margin: 0,
    textTransform: "uppercase",
    fontSize:'10px'
  },
  avatar: {
    marginRight: 16
  }
}));

const Episodes = ({ data, variant = 'square', character = false }) => {
  const classes = useStyles();

  return (
    <List>
      {data?.length ? data.map(item => (
        <ListItem
          key={item.id}
          to={`/${character ? 'characters' : 'episodes' }/${item.id}`}
          component={Link}
          alignItems="center"
          button
        >
          <ListItemAvatar>
            <Avatar variant={variant} alt={item?.imageName} src={item?.imageName} className={classes.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <div className={classes.root}>
                <p className={classes.status}>
                  {character ? ['Живой', 'Мертый', 'Неизвестно'][item.status] : `Cерия ${item.series}`}
                </p>
                {item.name || item.fullName}  
              </div>
            }
            secondary={character ? `${item.race}, ${['Мужской','Женский'][item.gender]}` : dayjs(item.premiere).locale('ru').format('DD MMMM YYYY')}
          />
          <ListItemSecondaryAction>
            <VectorIcon/>
          </ListItemSecondaryAction>
        </ListItem>
      )) : null}
    </List>
  );
}

export default Episodes;
