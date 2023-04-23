
export default function Service (props) {
  return (
    <div className='text-white py-5 flex flex-col justify-center md:bg-black_bg md:p-8 md:text-left md:w-80'>
      <div className='w-20 flex justify-center mx-auto md:mx-0'>
        <img src={`../src/assets/images/${props.imageUrl}.png`} alt='' />
      </div>

      <div className=''>
        <h2 className='text-3xl font-bold py-2'>{props.service}</h2>
      </div>
      <div>{props.content}</div>
    </div>
  );
}
