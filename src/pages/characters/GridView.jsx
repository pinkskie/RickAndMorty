import { Avatar, Grid, Typography } from "@material-ui/core";
import { Status } from "components";

const GridView = ({ data }) => {
  return (
    <Grid container>
      {data?.length ? data?.map(item => (
        <Grid
          item
          xs={6}
          key={item?.id}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          style={{ padding: 16 }}
        >
          <Avatar src={item?.imageName} style={{ width: 120, height: 120, marginBottom: 16 }} />
          <Status status={item?.status} />
          <Typography variant="body1" align="center">{item?.fullName}</Typography>
          <Typography variant="body2" color="secondary" align="center">{item?.race}, {['Мужской','Женский'][item.gender]}</Typography>
        </Grid>
      )) : null}
    </Grid>
  )
}

export default GridView;