import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function ProjectCard (props) {
  function showDetail () {
    const cardList = document.querySelectorAll('.projectDetail');
    const length = cardList.length;
    const card = cardList[props.id - 1];
    const list = card.classList;
    list.add('visible');
    list.remove('invisible');
    for (let i = 0; i < length; i++) {
      if (i === (props.id - 1)) {
        continue;
      }
      const card = cardList[i];
      const list = card.classList;
      list.add('invisible');
      list.remove('visible');
    }
  }
  return (
    <div className='md:w-80 md:relative lg:w-96 xl:w-80'>
      <div onClick={showDetail} onMouseOver={showDetail}><img className='relative' src={`/images/${props.imageUrl}.jpeg`} alt='' /></div>
      <div className='relative md:absolute md:bottom-0 text-white text-md bg-dark_blue w-full py-3 px-5 bottom-5 projectDetail flex justify-between invisible'>
        <div>
          <div className='opacity-80 font-bold'>{props.title}</div>
          <div className='opacity-50 font-bold'>{props.category}</div>
        </div>
        <div className='animate__animated animate__headShake animate__infinite infinite'>
          <button className='bg-red p-4 rounded-full'>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
