import { useState } from 'react'
import './CSS/App.css'
import MyHobbies from './MyHobbies'
import Profile from './profil'
import Clock from './clock'
import MyList from './MyList'
import Home from './Home'
import About from './About'
import Layout from './Layout'
import NoPage from './Nopage'
import ClassList from './ClassList'

{/*import { BrowserRouter, Route, Routes } from 'react-router-dom'*/}


function App() {
 
  return (
    <>
      {/*<BrowserRouter>
        <Layout></Layout>
        <Routes>
          <Route path='/'/>
            <Route index element={<Home></Home>} />
            <Route path='about' element={<About></About>} />
            <Route path= '*' element= {<NoPage></NoPage>} />
            <Route path= 'clock' element= {<Clock></Clock>} />
            <Route path= 'profil' element= {<Profile></Profile>} />
            <Route path= '/hobbies' element= {<MyHobbies></MyHobbies>} />
            <Route path= 'list' element= {<MyList></MyList>} />
        </Routes>
      </BrowserRouter>*/}
      
      <ClassList></ClassList>
    </>
  )
}

export default App
