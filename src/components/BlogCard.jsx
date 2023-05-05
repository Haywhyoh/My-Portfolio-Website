import { FaUserEdit, FaRegCalendarAlt } from 'react-icons/fa';
export default function BlogCard () {
  return (
    <div className='text-left w-72'>
      <div><img src='/images/blog1.jpg' className='rounded-xl' /></div>
      <div className='font-bold text-3xl pt-4'> API Testing</div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <div> <FaUserEdit /> </div>
          <div className=''>Adedayo Samuel</div>
        </div>
        <div className='flex items-center gap-3'>
          <div> <FaRegCalendarAlt /></div>
          <div> Jan 3, 2023</div>
        </div>
      </div>

    </div>
  );
}
