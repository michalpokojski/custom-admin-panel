import { SubmissionError } from 'redux-form';
import users from '../data/users.json'
import { logInUser } from '../reducers/auth'

const showOnlyAdmins = value => users.filter(user => user.type === userType).map(user => user[value])
const gogogo = ms => new Promise(resolve => setTimeout(resolve, ms))
const userType = 'admin'
const email = showOnlyAdmins('email')
const password = showOnlyAdmins('password')

function submit(values, dispatch) {
  return gogogo(1).then(() => {
    if ((!email.includes(values.email)) || (!password.includes(values.password))) {
      throw new SubmissionError({
        _error: 'E-mail address or password incorrect. Please try again.',
      })
    } else {
      dispatch(logInUser(users.find(user => user.email === values.email && user.password === values.password)))
    }
  })
}

export default submit