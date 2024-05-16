import React, { useEffect, useState } from 'react'
import LoginForm from './login-form/LoginForm'
import { isValidPassword } from '../../utils/isValidPassword'
import { useNavigate } from 'react-router-dom'

const correctUsername = 'test@luxpmsoft.com'
const correctPassword = 'test1234!'

const Login = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })
  const [alertMessage, setAlertMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (alertMessage.length > 0) {
      window.alert(alertMessage)
      setAlertMessage('')
    }
  }, [alertMessage])

  const handleLogin = (e) => {
    e.preventDefault()
    if (userData.username === correctUsername && userData.password === correctPassword) {
      navigate('/home')
    } else {
      // generally you should show a generic error message like "Username or password is incorrect" on either incorrect fields
      // but I will be following the guidelines for the task
      if (userData.password !== correctPassword) {
        setAlertMessage((currError) => currError + 'The provided password is wrong\n')
      }
      // there is no specification for username but there is for password
      // so I added a check as well since testing with correct password but wrong username would do nothing
      if (userData.username !== correctUsername) {
        setAlertMessage((currError) => currError + 'The provided username is wrong')
      }
    }
  }

  const handleUserData = (e, field) => {
    setUserData({ ...userData, [field]: e.target.value })
    field === 'password' && errorMessage !== '' && setErrorMessage('')
  }

  const handlePasswordValidation = () => {
    // this is better done with formik+yup but it takes some setup (time)
    if (userData.password.length > 0 && !isValidPassword(userData.password)) {
      setErrorMessage('Wrong combination')
    } else {
      setErrorMessage('')
    }
  }

  return (
    <LoginForm
      username={userData.username}
      password={userData.password}
      handleUserData={handleUserData}
      onLogin={handleLogin}
      errorMessage={errorMessage}
      handlePasswordValidation={handlePasswordValidation}
    />
  )
}

export default Login
