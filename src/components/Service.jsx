
export default function Service (props) {
  return (
    <div className=' py-5 flex flex-col justify-center md:bg-black_bg md:p-8 md:text-left md:w-80 lg:bg-layout_black lg:bg-opacity-0 lg:w-72 xl:w-80 xl:mx-auto 2xl:w-96 2xl:p-12 '>
      <div className='w-20 flex justify-center mx-auto md:mx-0'>
        <img src={`/images/${props.imageUrl}.png`} alt='' />
      </div>

      <div className=''>
        <h2 className='text-3xl font-bold py-2 2xl:text-4xl'>{props.service}</h2>
      </div>
      <div className='2xl:text-xl'><p className='2xl:text-opacity-10'>{props.content}</p></div>
    </div>
  );
}
