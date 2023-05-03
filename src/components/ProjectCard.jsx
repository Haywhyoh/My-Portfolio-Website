import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Modal } from 'react-overlays';
import { useState } from 'react';

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
    <div className='md:w-80 md:relative lg:w-96 xl:w-80 '>
      <Modal
        className='justify-center mx-auto flex  bg-layout_black2'
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}

      >
        <div className=' w-2/3 h-screen bg-dark_blue text-white'>
          <button onClick={handleClose}>Close</button>
          <div>
            <img src='/images/project_bg.jpeg' alt='' />
          </div>
          <div className=' bg-black_bg'>
            <div>
              <div>
                <div>CLIENT</div>
                <div>Personal</div>
              </div>
              <div>
                <div>DATE</div>
                <div>01, October, 2022</div>
              </div>

            </div>
            <div>
              <div>
                <div>PROJECT TYPE</div>
                <div>API development</div>
              </div>
              <div>
                <div>LINKS</div>
                <div>Github <div>github.com</div></div>
                <div>Live: <div>writeabout.com</div></div>
              </div>

            </div>

          </div>
          <div>
            <div>Project Description</div>
            <p>anglngsd</p>
            <div>Technologies Used</div>
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
