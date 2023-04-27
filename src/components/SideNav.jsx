import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { RiHome4Line } from 'react-icons/ri';
import { MdOutlineDesignServices } from 'react-icons/md';
import { SlBriefcase } from 'react-icons/sl';
import { SiAboutdotme } from 'react-icons/si';
import { BsFileEarmarkRichtext, BsChatText, BsPlay } from 'react-icons/bs';
export default function SideNav () {
  const initialState = {
    home: false,
    services: false,
    portfolio: false,
    about: false,
    resume: false,
    contact: false
  };
  const [icon, setIcon] = useState(initialState);

  return (
    <div className='hidden h-screen lg:w-28 xl:w-36 fixed z-40  bg-dark_blue lg:block'>
      <div className='flex flex-col h-screen justify-between my-auto gap-y-7'>
        <div className='w-full py-4'><img src='./src/assets/images/logo.svg' className='w-full h-20' /></div>
        <div className='text-4xl flex flex-col justify-center  my-4'>
          <Link activeClass='active' to='home' spy smooth offset={-70} duration={200}>
            <div className='py-4 flex justify-center border-y-white border-b-2 border-t-2 border-opacity-20 text-xl' onClick={() => setIcon(() => ({ ...initialState, home: true }))}> {icon.home ? 'Home' : <RiHome4Line className='text-4xl' />}</div>

          </Link>
          <Link activeClass='active' to='services' spy smooth offset={100} duration={200}>
            <div className=' flex justify-center  py-4 border-y-white border-b-2 border-opacity-20 text-xl' onClick={() => setIcon(() => ({ ...initialState, services: true }))}> {icon.services ? 'Services' : <MdOutlineDesignServices className='text-4xl' />}</div>

          </Link>
          <Link activeClass='active' to='portfolio' spy smooth offset={100} duration={200}>
            <div className=' flex justify-center  py-4 border-y-white border-b-2 border-opacity-20 text-xl' onClick={() => setIcon(() => ({ ...initialState, portfolio: true }))}>{icon.portfolio ? 'Portfolio' : <SlBriefcase className='text-4xl' />}</div>

          </Link>
          <Link activeClass='active' to='about' spy smooth offset={-70} duration={200}>
            <div className=' flex justify-center  py-4 border-y-white border-b-2 border-opacity-20 text-xl' onClick={() => setIcon(() => ({ ...initialState, about: true }))}>{icon.about ? 'About' : <SiAboutdotme className='text-4xl' />}</div>

          </Link>
          <Link activeClass='active' to='skillMenu' spy smooth offset={-70} duration={200}>
            <div className=' flex justify-center  py-4 border-y-white border-b-2 border-opacity-20 text-xl' onClick={() => setIcon(() => ({ ...initialState, resume: true }))}>{icon.resume ? 'Resume' : <BsFileEarmarkRichtext className='text-4xl' />}</div>

          </Link>
          <Link activeClass='active' to='contact' spy smooth offset={-70} duration={200}>

            <div className=' flex justify-center  py-4 border-y-white border-b-2 border-opacity-20 text-xl' onClick={() => setIcon(() => ({ ...initialState, contact: true }))}>{icon.contact ? 'Contact' : <BsChatText className='text-4xl' />} </div>
          </Link>
        </div>
        <div className='flex justify-center mb-10 '>
          <BsPlay className='text-6xl p-2 bg-blue rounded-full mb-8 animate__animated animate__heartBeat animate__infinite infinite' />
        </div>
      </div>

    </div>
  );
}
