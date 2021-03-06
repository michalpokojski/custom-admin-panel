import React, { Component } from 'react'
import { required, email } from "../helpers/validation"
import { Field } from "redux-form"
import CustomTextField from './CustomTextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class CustomSelectField extends Component {
  state = {
    value: 'user'
  }

  inputValueInjection = (event, index, value) => this.setState({value})

  render() {
    const {input, label, meta: {touched, error}, children, ...custom} = this.props
    return (
      <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={this.inputValueInjection}
        children={children}
        value={this.state.value}
        {...custom}
      />
    )
  }
}

const NewUserForm = (props) => {
  const {error} = props
  return (
    <form className="log-in-form">
      <div>
        <div>
          <Field
            name="email"
            component={CustomTextField}
            type="text"
            label="Email"
            validate={[required, email]}
          />
        </div>
        <div>
          <Field
            name="phoneNumber"
            component={CustomTextField}
            label="Phone Number"
            type="number"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="firstName"
            component={CustomTextField}
            type="text"
            label="First Name"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="lastName"
            component={CustomTextField}
            type="text"
            label="Last Name"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="accountType"
            component={CustomSelectField}
            label="Account Type"
          >
            <MenuItem value={'admin'} primaryText="Admin"/>
            <MenuItem value={'user'} primaryText="User"/>
          </Field>
        </div>
        {error && <strong>{error}</strong>}
      </div>
    </form>
  )
}
export default NewUserForm