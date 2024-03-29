import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { connectTo } from '../../utils/common';
import { toWeather } from '../../actions/navigation';


export default connectTo(
  null,
  { toWeather },
  ({ toWeather }) => {
    return (
      <div>
    <ListItem button  onClick={()=> toWeather("weather")}>
      <ListItemText primary="Weather" />
    </ListItem>
  </div>
    );
  }
);