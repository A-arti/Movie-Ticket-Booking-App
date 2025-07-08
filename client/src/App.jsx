import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './componants/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import MyBookings from './pages/MyBookings'
import SeatLayout from './pages/SeatLayout'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './componants/Footer'


const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster />
    {!isAdminRoute && <Navbar /> }
      <Routes>
        <Route path = '/' element = {<Home />}  />
        <Route path = '/movies' element = {<Movies />}  />
        <Route path = '/movies/:id' element = {<MovieDetails />}  />
        <Route path="/movie/:id/:date" element={<SeatLayout />} />
        <Route path = '/my-bookings' element = {<MyBookings />}  />
        <Route path = '/favorite' element = {<Favorite />}  />
      </Routes>
       {!isAdminRoute && <Footer />}
    </>
  )
}

export default App