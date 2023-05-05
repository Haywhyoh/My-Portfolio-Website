import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Modal } from 'react-overlays';
import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { RiCloseCircleFill } from 'react-icons/ri';

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

  function hideDetail () {
    const cardList = document.querySelectorAll('.projectDetail');
    const length = cardList.length;
    for (let i = 0; i < length; i++) {
      const card = cardList[i];
      const list = card.classList;
      list.add('invisible');
      list.remove('visible');
    }
  }
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    console.log('success');
  };
  const renderBackdrop = (props) => <div className='backdrop' {...props} />;
  return (
    <div className='md:w-80 md:relative lg:w-96 xl:w-80'>
      <Modal
        className='justify-center mx-auto flex  bg-layout_black2 md:py-0 h-screen'
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div className=' w-2/3 h-screen bg-dark_blue text-white overflow-auto relative'>
          <button onClick={handleClose} className='p-4 text-4xl absolute right-0 top-2'> <RiCloseCircleFill className='text-red ' /></button>
          <div>
            <img src='/images/project_bg.jpeg' alt='' />
          </div>
          <div className='flex flex-col bg-black_bg lg:flex-row lg:gap-x-10 justify-center text-left gap-3 p-8'>
            <div className='lg:w-1/2'>
              <div>
                <div className='py-3 font-bold text-lg'>CLIENT</div>
                <div className='opacity-50'>Personal</div>
              </div>
              <div>
                <div className='py-3 font-bold text-lg'>DATE</div>
                <div className='opacity-50'>01, October, 2022</div>
              </div>

            </div>
            <div className='lg:w-1/2'>
              <div>
                <div className='py-3 font-bold text-lg'>PROJECT TYPE</div>
                <div className='opacity-50'>API development</div>
              </div>
              <div>
                <div className='font-bold text-lg'>LINKS</div>
                <div className='py-3 text-opacity-20'> <div><BsGithub /> </div></div>
                <div className='opacity-50'>Live: <div>writeabout.com</div></div>
              </div>
            </div>

          </div>
          <div className='p-4 lg:p-8'>
            <div className='text-3xl text-center lg:text-left font-bold'>Project Description</div>
            <p className='py-4 opacity-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec porttitor, neque et tempor blandit, ex dui viverra urna, vel aliquam metus lacus non ipsum.
              Vestibulum elementum magna quis auctor viverra. Quisque aliquam massa sapien. Donec sit amet gravida sapien.
              Nunc sit amet eleifend tellus. Nunc facilisis et dui at dapibus.
              Nullam sed lacus egestas, rutrum purus quis, volutpat lectus.

              Aliquam scelerisque quam sit amet tortor consequat, ac rutrum lectus dictum.
              Aliquam nibh ante, aliquet ac justo vitae, tempus vestibulum dui. Sed eu rutrum nulla.
              Donec et nibh ex. Maecenas luctus turpis ac dui convallis feugiat.
              Nullam semper dui dui, pharetra ullamcorper ante bibendum at.
              Nullam a sapien vehicula, scelerisque augue eget, lobortis quam.
              Maecenas vulputate laoreet dui eu pellentesque.
              Ut ullamcorper orci in iaculis varius.
              Mauris congue nisl nec erat euismod malesuada.
              Cras finibus sem ac leo imperdiet vestibulum.
              Vestibulum id lorem vel nibh rutrum luctus id nec tortor. Sed id lacus ut purus tristique efficitur quis quis odio.
            </p>
            <div className='text-3xl font-bold text-center lg:text-left'>Technologies Used</div>
            <div className='flex py-1 justify-center lg:justify-start opacity-60'>
              <ul className=' list-disc p-8'>
                <li>NodeJS</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>MongoDb</li>
                <li>Flask</li>
              </ul>
            </div>
            <div>Architecture</div>
          </div>
        </div>
      </Modal>
      <div onMouseOver={showDetail} onMouseOut={hideDetail}>
        <img className='relative' src={`/images/${props.imageUrl}.jpeg`} alt='' />
        <div className='relative md:absolute md:bottom-0 text-white text-md bg-dark_blue w-full py-3 px-5 bottom-5 projectDetail flex justify-between invisible'>
          <div>
            <div className='opacity-80 font-bold'>{props.title}</div>
            <div className='opacity-50 font-bold'>{props.category}</div>
          </div>
          <div className='animate__animated animate__headShake animate__infinite infinite'>
            <button className='bg-red p-4 rounded-full' onClick={() => setShowModal(true)}>
              <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
