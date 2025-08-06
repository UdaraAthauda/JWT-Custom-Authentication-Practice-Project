import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import {ChakraProvider, defaultSystem} from '@chakra-ui/react'
import { AuthProvider } from './contexts/useAuth'
import PrivateRoute from './components/PrivateRoute'


function App() {

  return (
    <>
      <ChakraProvider value={defaultSystem}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ChakraProvider>
      
    </>
  )
}

export default App
