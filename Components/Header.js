import Image from 'next/image'

import {HomeIcon , PhoneIcon ,SearchCircleIcon ,UserGroupIcon } from '@heroicons/react/outline'
import logo from './images/logo.jpg'
import Headeritems from './Headeritems'
export default function Header() {
    return (
        <>
        <header  className="flex  bg-opacity-100  items-center head sticky  animated top-0 w-full">
         <div className="flex flex-grow  items-center  ">
         <Image
    className="object-contain  rounded-full hover:animate-spin"
src={logo} alt="" height={50} width={70}/>
  
         </div>
         <div className="flex flex-grow justify-end ">
        
            <Headeritems Icon={HomeIcon} Title="Home"/>
            
            <Headeritems Icon={SearchCircleIcon} Title="Search"/>
           
            <Headeritems Icon={UserGroupIcon} Title="About"/>
          

            <Headeritems Icon={PhoneIcon} Title="Contact"/>
         </div>
         
        </header>
        </>
    )
}

