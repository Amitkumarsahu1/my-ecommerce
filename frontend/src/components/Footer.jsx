import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-[16px]'>
        <div>
            <img src={assets.name} className='mb-5 w-38' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, harum inventore velit vero maxime vel nihil praesentium quod rem perspiciatis! Similique nobis autem quia. Ullam?</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-1200012002</li>
                <li>contact@company.com</li>
            </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-lg text-center'>Copyright 2025@ E-commerce.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
