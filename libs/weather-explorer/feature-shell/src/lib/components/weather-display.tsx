import { Paper, Typography } from '@material-ui/core';

export const WeatherDisplay: React.FC<{
  title: string;
  data: string | undefined;
}> = ({ title, data }) => {
  return (
    <Paper style={{ background: 'lightgrey' }}>
      <Typography variant="h3">{title}</Typography>
      <pre style={{ overflowX: 'scroll' }}>{data}</pre>
    </Paper>
  );
};
