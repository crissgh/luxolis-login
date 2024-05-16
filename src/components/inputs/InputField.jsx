import React, { useState } from 'react'
import './InputField.scss'

const InputField = ({ label, required, onFocus, onBlur, icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
    onFocus && onFocus()
  }

  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsFocused(false)
    }
    onBlur && onBlur()
  }

  return (
    <div className={`input-field ${isFocused || props.value ? 'focus' : ''} `}>
      <input required={required} onFocus={handleFocus} onBlur={handleBlur} {...props} />
      <label>
        {icon}
        {label}
      </label>
    </div>
  )
}

export default InputField
