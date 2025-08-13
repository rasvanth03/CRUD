import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dashboard from './dashboard'
import CreateUser from './createuser'
import Update from './update'
import Products from './product'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/createuser' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
