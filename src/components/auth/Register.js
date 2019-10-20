import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, email, length } from 'redux-form-validators'

import { submitRegister } from '../../actions/auth'
import { to } from '../../actions/navigation'
import { connectTo } from '../../utils/common'
import TextField from './TextField'
import AuthForm from './AuthForm'


export default connectTo(
    null,
    {to, submitRegister},
    reduxForm({form:'register'})(
    ({
        handleSubmit,
        submitRegister,
        to
    }) => {
        const fields = [
            <Field
              name="email"
              key="email"
              component={TextField}
              label="Email"
              type="text"
              validate={[required(), email()]}
            />,
            <Field
              name="password"
              key="password"
              component={TextField}
              label="Password"
              type="password"
              validate={[required(), length({ min: 8 })]}
            />
          ]
          return (
            <AuthForm
            fields={fields}
            handleSubmit={handleSubmit}
            onSubmit={submitRegister}
            submitText='Register'
            onBottomTextClick={() => to('login')}
            bottomText="Already have an account? Login"
          />
          );
        }
    ) 
);