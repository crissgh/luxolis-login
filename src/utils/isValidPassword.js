export const isValidPassword = (password) => {
  // >=1 letter, >=1 digit, >=1 symbol
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}[\]:;<>,.?/~`|-]).{8,}$/
  return passwordRegex.test(password)
}
