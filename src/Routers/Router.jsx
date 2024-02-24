import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Projects from '../Pages/Projects/Projects'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Error from '../Pages/Error/Error'

export default function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/contactUs' element={<ContactUs/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </>
    )
}
