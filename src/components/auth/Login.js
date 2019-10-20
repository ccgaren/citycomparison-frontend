import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, presence, email, length } from 'redux-form-validators'

import { submitLogin } from '../../actions/auth'
import { to } from '../../actions/navigation'
import { connectTo } from '../../utils/common';
import TextField from './TextField'
import AuthForm from './AuthForm'


export default connectTo(
  null,
  { to, submitLogin },
  reduxForm({form: 'login'})(
    ({
        handleSubmit,
        submitLogin,
        to
    }) => {
        const fields =[
            <Field
              name ='email'
              key='email'
              component={TextField}
              label ="Email"
              type = "text"
              validate={[required(), email()]}
              />,
              <Field
              name="password"
              key="password"
              component={TextField}
              label="Password"
              type="password"
              validate={[presence(), length({ min: 8 })]}
            />
        ]
        return (
            <AuthForm
              fields={fields}
              handleSubmit={handleSubmit}
              onSubmit={submitLogin}
              submitText='Login'
              onBottomTextClick={()=> to('register')}
              bottomText="Don't have an account? Register"
              />
        );
    }
));
