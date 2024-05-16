import React from 'react'
import InputField from '../../../components/inputs/InputField'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import './LoginForm.scss'
import { ReactComponent as Lock } from '../../../assets/lock.svg'
import { ReactComponent as Avatar } from '../../../assets/user.svg'
import { ReactComponent as Pic } from '../../../assets/Group.svg'

const LoginForm = ({
  username,
  password,
  onLogin,
  errorMessage,
  handleUserData,
  handlePasswordValidation,
}) => {
  return (
    <div className="page-container">
      <form className="login-form" onSubmit={onLogin}>
        <Pic />
        <div className="form-fields">
          <InputField
            type="text"
            value={username}
            onChange={(e) => handleUserData(e, 'username')}
            icon={<Avatar />}
            label="USERNAME"
            required
          />
          <InputField
            autoComplete="new-password"
            type="password"
            value={password}
            onChange={(e) => handleUserData(e, 'password')}
            onBlur={handlePasswordValidation}
            icon={<Lock />}
            label="PASSWORD"
            required
          />
          <div className="error">{errorMessage}</div>
        </div>
        <PrimaryButton>LOGIN</PrimaryButton>
        <div className="forgot-pass">Forgot password?</div>
      </form>
    </div>
  )
}

export default LoginForm
