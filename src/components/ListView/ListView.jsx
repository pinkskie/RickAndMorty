import { useHistory } from "react-router-dom";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Status } from "components";
import { VectorIcon } from "icons";

import dayjs from 'dayjs'
import 'dayjs/locale/ru'

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    marginRight: 16
  }
}));

export const ListViewItem = ({ to, label, status, isCharacter, secondary, variant, img, hideAction }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <ListItem onClick={() => history.push(to)} alignItems="center" button>
      <ListItemAvatar>
        <Avatar
          variant={variant}
          src={img}
          alt={label}
          className={classes.avatar}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className={classes.root}>
            <Status status={status} isCharacter={isCharacter} />
            {label}  
          </div>
        }
        secondary={secondary}
      />
      {!hideAction && (
        <ListItemSecondaryAction>
          <VectorIcon/>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  )
}

const ListView = ({ data, character = false, hideAction = false }) => (
  <List>
    {data?.length ? data.map(item => (
      <ListViewItem
        key={item.id}
        to={`/${character ? 'characters' : 'episodes' }/${item.id}`}
        label={item.name || item.fullName}
        status={character ? item.status : item.series}
        isCharacter={character}
        secondary={character ? `${item.race}, ${['Мужской','Женский'][item.gender]}` : dayjs(item.premiere).locale('ru').format('DD MMMM YYYY')}
        variant={character ? 'circular' : 'square'}
        img={item?.imageName}
        hideAction={hideAction}
      />
    )) : null}
  </List>
);

export default ListView;
