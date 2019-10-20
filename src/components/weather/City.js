import React  from 'react'
import {Card, CardContent, Typography, Box}  from '@material-ui/core'
import { connectTo } from '../../utils/common'

export default ({ city }) => {
        if(Object.entries(city).length === 0) return ''
         const iconPath =`/images/weatherIcons/${city.icon}.png`
          return (
            <Card>
                <CardContent>
                    <Typography component="h2">
                    <Box textAlign="left" m={1}>
                    {city.name}
                    </Box>              
                    </Typography>
                    <Typography component="div">
                    <Box textAlign="left" m={1}>
                    {city.status}
                    </Box>
                    <Box textAlign="left" m={1}>
                    <img height="50" width="50"  src={iconPath}/>
                    </Box>
                    </Typography>
                </CardContent>
            </Card>
          );
        }
  