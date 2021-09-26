import { Box, Typography, IconButton } from '@material-ui/core';
import { GridIcon, ListIcon } from 'icons';

const ChangeView = ({ view, onChange, count }) => (
  <Box display="flex" justifyContent="space-between" alignItems="center" marginX={3}>
    <Typography variant="body1" color="secondary">Всего персонажей: {count || 0}</Typography>
    <IconButton onClick={onChange}>
      {view === 'list' ? <GridIcon /> : <ListIcon />}
    </IconButton>
  </Box>
)

export default ChangeView;