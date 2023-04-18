import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function ProjectCard (props) {
  function getAway () {
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
    <div>
      <div onClick={getAway}><img className='relative' src={`../src/assets/images/${props.imageUrl}.jpeg`} alt='' /></div>
      <div className='relative text-white text-md bg-dark_blue w-full py-3 px-5 bottom-5 projectDetail flex justify-between invisible'>
        <div>
          <div className='opacity-80 font-bold'>{props.title}</div>
          <div className='opacity-50 font-bold'>{props.category}</div>
        </div>
        <div>
          <button className='bg-red p-4 rounded-full'>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
