import { Grid } from '@mui/material';
import Description from './description/Description';
import Graphs from './graphs/Graphs';
import { styles } from './ourGoal.styles';

export default function OurGoal() {
  return (
    <Grid container columns={{ xs: 4, md: 12 }} sx={styles.ourGoalMediaBox}>
      <Grid item xs={6}>
        <Graphs />
      </Grid>
      <Grid item xs={6}>
        <Description />
      </Grid>
    </Grid>
  );
}
