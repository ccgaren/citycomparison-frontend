/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connectTo } from '../../utils/common';
import Title from './Title';
import SavedCities from './SavedCities'
import { saveCities } from '../../sagas/weather';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});


function ListSavedCities(props) {
  const classes = useStyles();
  const { cities } = props;
  return (
    <React.Fragment>
      <Title>Saved Cities</Title>
      <Typography component="div">
      { cities && cities.map((savedcity, number) => {
            return (
              <SavedCities
                key ={number}
                data ={savedcity}
              />
            );
          })}
        </Typography>
    </React.Fragment>
  );
}

export default connectTo(
  state =>({
      cities: state.weatherSearch.cities
    }),{},
    ListSavedCities)