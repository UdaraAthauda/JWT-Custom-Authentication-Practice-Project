import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import {ChakraProvider, defaultSystem} from '@chakra-ui/react'

function App() {

  return (
    <>
      <ChakraProvider value={defaultSystem}>
        <BrowserRouter>  
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
      
    </>
  )
}

export default App
