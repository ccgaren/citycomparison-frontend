/* eslint-disable no-script-url */
import React from 'react';
import {Box} from '@material-ui/core';

export default ({ data }) => {
  return ( 
      <Box textAlign="left" m={1}>
            {data.cityA} VS {data.cityB}
       </Box>     
  );
}