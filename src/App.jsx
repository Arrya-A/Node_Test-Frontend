import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import './bootstrap.min.css'
import MyProfile from './pages/MyProfile'
import AllUsers from './pages/AllUsers'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/all-users' element={<AllUsers />} />
      </Routes>
    </>
  )
}

export default App
