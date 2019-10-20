import React from 'react'
import { Container, Grid, Paper } from '@material-ui/core'

import { connectTo } from '../../utils/common'

import City from './City'

export default connectTo(
    state =>({
        cityA: state.weatherSearch.cityA,
        cityB: state.weatherSearch.cityB
      }),{},
      ({cityA, cityB}) => {
            return (
                <React.Fragment>
                <Grid item xs={12} md={6} lg={6}>
                <Paper >
                <City city ={cityA}/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
              <Paper >
              <City city ={cityB}/>
              </Paper>
            </Grid>
            </React.Fragment>
            );
        });