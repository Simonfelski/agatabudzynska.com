import React from 'react'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='md:flex md:justify-center bg-secondary'>
      <div className='flex flex-col md:flex md:flex-row items-center text-xs py-10 lg:py-10 lg:flex-row lg:justify-around'>
      <div className='uppercase font-semibold lg:font-bold lg:mr-36'>
        <h2 className='md:text-lg'>Zajrzyj po więcej</h2>
        <ul className='flex justify-center pt-5'>
            <li className='px-2 lg:px-5'>
                <a href="https://www.instagram.com/agata_budzynska_joga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className='rounded'><FaInstagram className='text-3xl md:text-4xl' /></a>
            </li>
            <li>
                <a href="https://www.facebook.com/agata.budzynska.9" target="_blank"><FaFacebookSquare className='text-3xl md:text-4xl' /></a>
            </li>
        </ul>
      </div>
      <div className='text-center'>
        <h2 className='uppercase p-5 lg:font-bold md:text-lg'>kontakt</h2>
        <ul>
            <li className='pb-2'>tel. +48 798 477 892</li>
            <li className='pb-5'>kontakt@agatabudzynska.com</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer
