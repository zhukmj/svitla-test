import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';

type Props = {
  data: { [key: string]: number };
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
  },
  cell: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

function Stats({ data }: Props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {Object.entries(data).map(([status, value]) => (
        <Typography key={status} className={classes.cell}>
          {status}: {value}
        </Typography>
      ))}
    </Paper>
  );
}

export default Stats;
