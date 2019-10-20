import React from 'react'
import styled from 'styled-components'

import { Container, Grid, Paper } from '@material-ui/core';

import { connectTo } from '../../utils/common';

import SearchForm from './SearchForm'
import ListSavedCities from './ListSavedCities'
import SearchResult from './SearchResult'

export default () => {
    return (
      <Grid container  spacing={3}>
      {/* Search Form */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper>
        <SearchForm />
        </Paper>
      </Grid>
      {/* List SavedCities */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper>
          <ListSavedCities/>
        </Paper>
      </Grid>
      {/*Search Result */}
      <SearchResult />
    </Grid>
    );
  };

