import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Typography, Divider, Grid } from "@material-ui/core";
import { ListView, Title, GoBack } from "components";

import { getLocationsInfo } from "utils/api/locations";

const LocationsInfo = () => {
  const { id } = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    const fetchLocationsInfo = async () => {
      const info = await getLocationsInfo(id);
      setInfo(info.data);
    }; 
    fetchLocationsInfo();
  }, [id]);

  return (
    <>
      <img src={info?.imageName} alt={info?.name} style={{ width: "100%" }} />
      <GoBack />
      <Grid container style={{ padding: 16 }}>
        <Grid item xs={12}>
          <Typography variant="h5">{info?.name}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {info?.type} • {info?.measurements}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 32, marginTop: 32 }}>
          <Typography variant="body2">{info?.about}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Title>Персонажи</Title>
      <ListView data={info?.characters} character />
    </>
  );
};

export default LocationsInfo;
