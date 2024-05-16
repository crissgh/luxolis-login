import Login from './pages/login/LoginContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
