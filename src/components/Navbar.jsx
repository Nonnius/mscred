import React, { useEffect, useState } from 'react'
import './navbar.css'
import { navItems } from '../data/Data'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(()=>{
        if (showMobileMenu) {
            document.body.style.overflow ='hidden'
        } else {
            document.body.style.overflow ='auto'
        }
    }, [showMobileMenu]);


  return (
    <>
        <div className='fixed bg-cyan-200/15 backdrop-blur-md h-10 top-0 w-full z-50 
        px-3 transition-all'>

            {/*Navbar menu start*/}
            <div className='container mx-auto flex items-center justify-between px-3'>
                <div className='pgTitle text-2xl mt-1 text-outline text-white font-bold'>MS Training</div>
                <ul className='hidden mt-1 py-2 sm:flex space-x-8 text-white text-sm font-semibold uppercase'>
                    {navItems.map((item)=>(
                        <li key={item.name} className='navItems hover:text-cyan-600'>
                            <a href={item.path}>{item.name}</a>
                        </li>
                    ))}
                </ul>

                {/*Mobile menu start*/}
                <button className='text-white scroll-smooth text-2xl transition cursor-pointer sm:hidden 
                z-50 fixed mt-1.5 right-4 hover:text-cyan-600'>
                    <HiMenuAlt3 onClick={()=> setShowMobileMenu(true)}
                    className='menuBtn cursor-pointer'/>
                </button>
            </div>   
        </div>

        {/*Mobile menu pop-out start*/}
        {showMobileMenu && (
            <div className='fixed inset-0 z-[100] bg-white/10 backdrop-blur-md bg-opacity-90 flex flex-col items-center 
            p-6 transition-all duration-300 md:hidden'>
                <MdClose onClick={()=> setShowMobileMenu(false)}
                className='text-white hover:text-cyan-600 text-3xl ml-[20rem] cursor-pointer'
                />
                {/**Mobile menu items*/}
                <nav className='mt-10 text-cyan-500 text-[24px] space-y-4 text-center'>
                    <a href="https://reid-dev-portfolio.vercel.app" 
                        onClick={() => setShowMobileMenu(false)}
                        className="block cursor-pointer text-cyan-500 font-semibold">Home</a>
                        <a href="https://reid-education.vercel.app" 
                        onClick={() => setShowMobileMenu(false)}
                        className="block cursor-pointer text-cyan-500 font-semibold">Education</a>
                        <a href="https://project-gallery.vercel.app" 
                        onClick={() => setShowMobileMenu(false)}
                        className="block cursor-pointer text-cyan-500 font-semibold">Projects Gallery</a>                
                        <a href="https://reid-dev-portfolio.vercel.app/#contact" 
                        onClick={() => setShowMobileMenu(false)}
                        className="block cursor-pointer text-cyan-500 font-semibold">Contact</a>
                </nav>
            </div>
        )}
    </>
  )
}

export default Navbar