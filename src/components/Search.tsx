import React, { ChangeEvent } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { CancelOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  /**
   * Value of the input
   */
  value: string;

  /**
   * onChange callback
   */
  onChange: (value: string) => void;

  /**
   * onReset callback
   */
  onReset: () => void;
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 0',
    padding: '2px 4px',
  },
  input: {
    flex: '1 0 auto',
    marginLeft: 12,
  },
  iconButton: {
    padding: 10,
  },
});

function Search({ value, onChange, onReset }: Props) {
  const classes = useStyles();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <div>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search here..."
          value={value}
          onChange={handleChange}
        />

        <IconButton className={classes.iconButton} onClick={onReset}>
          <CancelOutlined />
        </IconButton>
      </Paper>
    </div>
  );
}

export default Search;
