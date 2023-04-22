import { FiMenu } from 'react-icons/fi';
export default function Nav () {
  return (
    <div className='text-white'>
      <div className='bg-black_bg p-4 flex justify-between items-center fixed w-full z-50'>
        <div className='text-4xl'><FiMenu /> </div>
        <div><img className=' w-20 text-2xl' src='../src/assets/images/logo.svg' /></div>
      </div>

    </div>

  );
}
