import React from "react";
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components'
import { connectTo } from '../../utils/common';
import { search, saveCities, changeCityA, changeCityB }  from '../../actions/weather'

const Form = styled.form`
  display: inline-block;
  `
const FormTextField = styled(TextField)`
 margin: 50px;
`
const FormButton = styled(Button)`
&& {
  margin-top: 25px;
  margin-left: 20px;
}
`
export default connectTo(
    null,
    { search,saveCities, changeCityA,changeCityB},
    ({ search, saveCities, changeCityA, changeCityB, cityA, cityB}) => {
          return (
            <Form noValidate autoComplete="off">
            <TextField
              id="cityA"
              label="CityA"
              value={cityA}
              onChange={({ target: { value } }) => changeCityA(value)}
              margin="normal"
              variant='outlined'
            />
            <FormTextField
              id="cityB"
              label="CityB"
              value={cityB}
              onChange={({ target: { value } }) => changeCityB(value)}
              margin="normal"
              variant='outlined'
            />
            <FormButton variant='outlined' onClick={search}>
              Search
            </FormButton>
            <FormButton variant='outlined' onClick={saveCities}>
             Save Cities
            </FormButton>
          </Form>
          );
        }
  );