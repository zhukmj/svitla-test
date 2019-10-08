import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Search from './Search';
import CandidatesTable from './CandidatesTable';
import Stats from './Stats';
import { useSearch, useStats } from '../common/hooks';
import { changeStatus } from '../redux/actions';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function Main() {
  const classes = useStyles();
  const dispatch = useDispatch();

  /**
   * Candidates array from redux
   */
  const candidates = useSelector((state: State) => state.candidates);

  /**
   * Current search query
   */
  const [query, setQuery] = useState('');

  /**
   * Filtered data to display in table
   */
  const tableData = useSearch(query, candidates);

  /**
   * Statistic data
   */
  const stats = useStats(tableData);

  /**
   * Handlers
   */
  const handleReset = () => setQuery('');
  const handleStatusChange = (id: number, status: string) => dispatch(changeStatus(id, status));

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4" component="h1">
        Candidates
      </Typography>
      <Search value={query} onChange={setQuery} onReset={handleReset} />
      <CandidatesTable data={tableData} onStatusChange={handleStatusChange} />
      <Stats data={stats} />
    </Container>
  );
}

export default Main;
