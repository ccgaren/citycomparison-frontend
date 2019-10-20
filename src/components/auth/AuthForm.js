import React from 'react'
import styled from 'styled-components'
import { Paper, Button } from '@material-ui/core'

import { submitAsyncValidation} from '../../utils/forms'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Container = styled(Paper)`
 margin-left:40%;
 margin-top:10%;
  width: 320px;
  padding: 20px;
`


const SubmitButton = styled(Button)`
  && {
    margin-top: 20px;
  }
`


const BottomText = styled(Button)`
  && {
    margin-top: 10px;
  }
`

export default ({ handleSubmit, onSubmit, submitText, onBottomTextClick, bottomText, fields }) => {
  const pageStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
  return (
      <Container>
        <Form
          onSubmit={submitAsyncValidation(handleSubmit, onSubmit)}
        >
          {fields}
          <SubmitButton type="submit" variant="outlined">{submitText}</SubmitButton>
        </Form>
        <BottomText onClick={onBottomTextClick} color='primary' size='small'>{bottomText}</BottomText>
      </Container>
  )
}
