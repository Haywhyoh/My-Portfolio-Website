import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
export default function Nav () {
  function hideNav () {
    const mobileNav = document.querySelector('#mobileNav');
    const navList = document.querySelector('#navList');

    const list = mobileNav.classList;
    const navListClass = navList.classList;

    list.add('hidden');
    list.remove('block');
    navListClass.add('animate__slideOutLeft');
    navListClass.remove('animate__slideInLeft');
  }

  function showNav () {
    const mobileNav = document.querySelector('#mobileNav');
    const navList = document.querySelector('#navList');

    const list = mobileNav.classList;
    const navListClass = navList.classList;
    list.remove('hidden');
    list.add('block');
    navListClass.add('animate__slideInLeft');
    navListClass.remove('animate__slideOutLeft');
  }
  return (
    <div className='text-white'>
      <div className='bg-black_bg p-4  flex justify-between items-center fixed w-full z-30'>
        <div className='text-4xl' onClick={showNav}><FiMenu /> </div>
        <div><img className=' w-20 text-2xl' src='../src/assets/images/logo.svg' /></div>
      </div>
      <div className='fixed z-50 w-full h-screen bg-layout_black2 hidden' id='mobileNav' onClick={hideNav}>
        <div className='w-4/5 bg-white h-full text-black_text font-bold p-5 ps-8 animate__animated' id='navList'>
          <div className='flex  justify-between'>
            <div className=''><img className='text-2xl' src='../src/assets/images/logo.svg' /></div>
            <div className='text-2xl z-50 border-2 border-layout_black text-dark_blue font-bold h-fit rounded-full p-1'><RiCloseFill /> </div>
          </div>
          <div>
            <div className='py-5 border-b border-b-layout_black'>Home</div>
            <div className='py-5 border-b border-b-layout_black'>Services</div>
            <div className='py-5 border-b border-b-layout_black'>Portfolio</div>
            <div className='py-5 border-b border-b-layout_black'>About</div>
            <div className='py-5 border-b border-b-layout_black'>Resume</div>
            <div className='py-5 border-b border-b-layout_black'>Contact</div>

          </div>
        </div>
      </div>

    </div>

  );
}
