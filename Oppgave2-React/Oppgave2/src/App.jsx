import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyHobbies from './MyHobbies'
import Profile from './profil'
import Clock from './clock'

function App() {
 
  return (
    <>
    <Profile></Profile>
     <MyHobbies></MyHobbies>
     <Clock></Clock>
    </>
  )
}

export default App
