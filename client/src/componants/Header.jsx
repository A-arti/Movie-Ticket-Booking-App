import React from 'react'
import {assets} from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
  return (
    <div className=' flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
        <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20"/>
        <h1 className=' text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Guardians <br/> of the Galaxy</h1>

        <div className=' flex items-center gap-4 text-gray-300'>
            <span>Action | Adventure | Sci-fi</span>
            <div className=' flex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5'/>2018
            </div>
            <div className=' flex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5'/>2h 8m
            </div>

        </div>
        <p className=' max-w-md text-gray-300'>Get ready for an epic cosmic adventure with Guardians of the Galaxy Vol. 2! Join Star-Lord, Gamora, Drax, Rocket, and Baby Groot as they blast across the universe, facing new enemies and discovering long-hidden family secrets.</p>
        <button onClick={()=>navigate('/movies')} className=' flex items-center gap-1 px-6 py-3 test-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
            Explore movies
            <ArrowRight  className="w-5 h-5"/>
        </button>

    </div>
  )
}
