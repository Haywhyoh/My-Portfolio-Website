import './App.css';
import 'animate.css';
import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Nav from './components/Nav';
import hand from './assets/images/hand.png';
import myPic from './assets/images/myPic.png';
import picBg from './assets/images/7.png';
import Service from './components/Service';
import ProjectCard from './components/ProjectCard';
import SideNav from './components/SideNav';
import serviceList from './data/services.json';
import projects from './data/projectCard.json';
import { SlLocationPin } from 'react-icons/sl';
import { FaWordpress, FaReact, FaNodeJs, FaPython, FaHeadphonesAlt, FaLinux, FaHtml5, FaCss3Alt, FaBootstrap, FaUserEdit, FaRegCalendarAlt } from 'react-icons/fa';
import { SiUpwork, SiFiverr, SiFlask, SiMongodb, SiExpress, SiMinutemailer, SiJavascript, SiTypescript, SiNginx, SiMysql, SiPostgresql, SiTailwindcss, SiAmazonaws, SiFigma, SiWix, SiElementor } from 'react-icons/si';
import FormInput from './components/FormInput';
function App () {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FullStack Engineer', 'Technical Writer', 'BackEnd Engineer', 'WordPress Developer', 'Software Engineer'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      loopCount: Infinity
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const d = new Date();
  const year = d.getFullYear();
  const [values, setValues] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    subject: '',
    message: ''

  });

  const inputs = [
    {
      id: 1,
      name: 'fullName',
      type: 'text',
      placeholder: 'Name',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      required: true
    },
    {
      id: 3,
      name: 'phone',
      type: 'text',
      placeholder: 'Phone',
      required: true
    }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function toggle () {
    const elementList = document.querySelectorAll('.skillTech');
    const skill = document.querySelector('#skills');
    const experience = document.querySelector('#experience');
    const experienceList = elementList[1].classList;
    const skillList = elementList[0].classList;
    experienceList.remove('bg-layout_black2');

    experienceList.add('bg-red');
    skillList.add('bg-layout_black2');
    skillList.remove('bg-red');

    skill.classList.remove('flex');
    skill.classList.add('hidden');
    experience.classList.remove('hidden');
    experience.classList.add('flex');
  }

  function toggle2 () {
    const elementList = document.querySelectorAll('.skillTech');
    const skill = document.querySelector('#skills');
    const experience = document.querySelector('#experience');
    const experienceList = elementList[1].classList;
    const skillList = elementList[0].classList;
    experienceList.add('bg-layout_black2');
    experienceList.remove('bg-red');
    skillList.remove('bg-layout_black2');
    skillList.add('bg-red');
    skill.classList.add('flex');
    skill.classList.remove('hidden');
    experience.classList.add('hidden');
    experience.classList.remove('flex');
  }

  return (
    <div>
      <Nav />
      <div className='pt-36 screen w-full font-body  bg-[url("./src/assets/images/banner.jpeg")] bg-cover bg-fixed bg-center text-white lg:relative '>
        <div className='absolute top-0'><SideNav /></div>
        {
            // <------------------------------------------------HOME ------------------------------------------------------------------>
          }
        <section className='container text-center md:flex md:flex-col lg:flex-row lg:pt-10 2xl:pt-20 lg:ps-36' id='home'>
          <div className='py-10 md:text-center md:flex md:flex-col md:justify-center md:gap-8 lg:w-1/2'>
            <div>
              <div className='text-center md:mx-auto md:flex md:justify-center'><div className='text-4xl font-extrabold flex gap-x-3 py-4 md:text-7xl lg:text-5xl 2xl:text-7xl'>Hi <img className='w-10 md:w-16 lg:h-16' src={hand} /> I'm Samuel</div></div>
              <span className='text-2xl md:text-4xl 2xl:text-4xl font-bold' ref={el} />
            </div>
            <div className='pt-9'><button className='bg-dark_blue px-10 py-4 rounded-3xl font-bold text-xl md:mb-10'>My Resume</button></div>
          </div>

          <div className='relative h-fit md:w-full lg:w-1/2'>
            <img src={myPic} className='absolute w-80  z-20 buttom-30 md:w-2/3 md:left-32 lg:w-4/5 lg:pe-8 ' />
            <img className=' w-96 h-80 absolute -top-8 md:w-2/3 md:left-32 ' src={picBg} />
          </div>
        </section>
        {
            // <-----------------------------------MY EXPERTISE ------------------------------------------------------------------>
          }
        <section className='text-center bg-layout_black mt-64 container md:mt-96 lg:mt-20 2xl:mt-40 lg:ps-36' id='services'>
          <div className='py-4'><h2 className='sub_title font-bold md:text-2xl md:pt-10'>My Expertise</h2></div>
          <div className='py-5'><h2 className=' font-bold text-4xl md:text-6xl'>What I Do</h2></div>
          <div className='flex gap-1 justify-center '>
            <div className=' w-3 border-b-4 opacity-60 border-red ' />
            <div className=' w-20 border-b-4 opacity-60 border-red ' />
          </div>
          <div className='py-5 md:pt-20'>
            <div className='md:flex md:gap-10 md:flex-wrap xl:gap-4 justify-center'>
              {serviceList.map(service => (
                <Service
                  key={service.id}
                  {...service}
                />
              ))}
            </div>
          </div>
        </section>
        {
            // <-----------------------------------MY RECENT WORKS ------------------------------------------------------------------>
          }
        <section className=' text-center py-10 container lg:ps-36' id='portfolio'>
          <div><h2 className='sub_title font-bold md:text-2xl md:pt-10'>Recent Work</h2></div>
          <div className='lg:flex lg:items-center 2xl:justify-center'>
            <div className=' text-4xl font-bold py-5 md:text-6xl lg:text-4xl lg:w-1/2 2xl:max-w-2xl'> Look at my portfolio and give a feedback</div>
            <div className='md:flex md:items-center md:gap-5 md:justify-center '>
              <div className=' text-5xl font-bold py-5'> 10 <br /> <span className=' font-medium text-2xl  md:text-xl'>Completed Projects</span></div>
              <div className=' text-5xl font-bold py-5'> 150+ <br /><span className='font-medium text-2xl  md:text-xl'>Tech Articles</span></div>
              <div className='md:flex md:items-center md:gap-5'>
                <div className='border-white w-full border-b-2 md:border-e md:h-20 md:border-b-0 ' />
                <div className=' text-6xl font-bold py-5 text-center'>98%<br /><span className='font-medium text-2xl md:text-xl w-40'>Positive Rating</span></div>
              </div>
            </div>
          </div>

        </section>

        <section className='container lg:ps-36'>
          <div className='md:flex md:flex-wrap gap-10 justify-center'>
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </div>
        </section>
        {
            // <----------------------------------- ABOUT ME ------------------------------------------------------------------>
          }
        <section className='m-2 text-center lg:flex lg:items-center lg:text-left  lg:px-4 lg:gap-x-20 lg:my-40 lg:mx-auto justify-center lg:ps-36' id='about'>
          <div className='flex justify-center mx-auto lg:mx-0'>
            <img src='../src/assets/images/myPic.png' className=' w-60 md:w-96 md:mt-32 lg:mt-0' />
          </div>
          <div className='lg:w-1/2'>
            <h2 className='sub_title font-bold py-3 md:text-2xl'>About Me</h2>
            <h2 className='text-4xl font-bold md:mx-20 lg:mx-0 lg:text-3xl lg:py-4 2xl:text-5xl'>I can help you develop and maintain your Websites and softwares</h2>
            <p className='py-5 font-medium text-lg md:mx-20 md:pt-10 lg:mx-0 lg:py-2 lg:text-sm 2xl:text-lg'> Hi, my name is Adedayo Samuel and I began using WordPress when it first began.
              I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.
              One of my specialties is taking an idea from scratch and creating a full-fledged platform.
              I go beyond to produce sites with a unique.
            </p>
            <div className='flex flex-col justify-center gap-y-10 py-10 lg:py-0 lg:gap-y-2 lg:pt-4'>
              <div className='lg:flex lg:gap-x-12 lg:items-center'>
                <div className='text-6xl m-0 text-upwork lg:text-4xl'><SiUpwork className=' inline-block' /></div>

                <div>
                  <h2 className='font-bold text-xl lg:text-lg py-2'>Professional Wordpress and MERN Developer</h2>
                  <p className='opacity-60 font-semibold'>Top Rated Freelancer - Upwork</p>
                </div>

              </div>
              <div className='border-white w-full border-b-2 opacity-30' />

              <div className='lg:flex lg:gap-x-8 lg:items-center'>
                <div className='text-6xl m-0 text-fiverr lg:text-6xl'><SiFiverr className=' inline-block' /></div>
                <div>
                  <h2 className='font-bold text-xl py-2 lg:text-lg'>Professional Technical Writer and Wordpress Developer</h2>
                  <p className='opacity-60 font-semibold'>Level 2 Freelancer - Fiverr</p>
                </div>

              </div>
            </div>
          </div>
        </section>
        {
            // <--------------------------------------SKILLS AND TECHNOLOGIES ------------------------------------------------------------------>
          }
        <section className='text-center container py-5 lg:ps-36' id='skillMenu'>
          <div className='sub_title font-bold py-5 md:pb-24'>Skills and Technologies </div>
          <div className='md:relative'>
            <div className='flex flex-wrap gap-y-5 py-5 flex-col justify-center md:flex-row md:w-full md:gap-x-20 md:bg-black_bg md:rounded-full md:border md:border-white md:border-opacity-30 md:absolute md:-top-16 lg:py-2'>
              <div onClick={toggle2}>
                <button className='bg-red  rounded-full  px-12 py-4  lg:px-32 skillTech'>
                  <div className='font-bold text-md md:text-xl'>SKILLS</div>
                </button>
              </div>
              <div onClick={toggle}>
                <button className='bg-layout_black2 rounded-full  px-14 py-5 md:px-12 lg:px-32 skillTech'> <div className='font-bold text-md'>EXPERIENCE</div></button>
              </div>

            </div>
            <div className='flex-wrap gap-8 hidden ' id='experience'>
              <div className='border  border-white p-4 bg-black_bg border-opacity-30 md:pt-20 lg:flex lg:bg-layout_black'>
                Experience
              </div>
            </div>
            <div className='flex flex-wrap gap-8  ' id='skills'>
              <div className='border w-full border-white p-4 bg-black_bg border-opacity-30 md:pt-20 lg:flex lg:bg-layout_black'>
                <div>
                  <div className='text-3xl lg:text-4xl font-bold p-5'>FrontEnd Technologies</div>
                  <div className='flex flex-wrap gap-5 justify-center text-center p-10'>
                    <div className='text-xl m-0 '><FaReact className='inline-block text-3xl md:text-5xl' /><div>React</div></div>
                    <div className='text-xl m-0 '><SiJavascript className='inline-block text-3xl md:text-5xl' /><div>JavaScript</div></div>
                    <div className='text-xl m-0 '><FaCss3Alt className='inline-block text-3xl md:text-5xl' /><div>CSS3</div></div>
                    <div className='text-xl m-0 '><FaHtml5 className='inline-block text-3xl md:text-5xl' /><div>HTML</div></div>
                    <div className='text-xl m-0 '><SiTailwindcss className='inline-block text-3xl md:text-5xl' /><div>TailWind</div></div>
                    <div className='text-xl m-0 '><FaBootstrap className='inline-block text-3xl md:text-5xl' /><div>Bootstrap</div></div>
                    <div className='text-xl m-0 '><SiTypescript className='inline-block text-3xl md:text-5xl' /><div>TypeScript</div></div>
                  </div>
                </div>

                <div>
                  <div className='text-3xl lg:text-4xl font-bold p-5'>Backend Technologies</div>
                  <div className='flex flex-wrap gap-5 justify-center text-center p-10'>
                    <div className='text-xl m-0'><FaNodeJs className='inline-block text-3xl' /><div>Node</div></div>
                    <div className='text-xl m-0 '><FaLinux className='inline-block text-3xl' /><div>Linux</div></div>
                    <div className='text-xl m-0 '><FaPython className='inline-block text-3xl' /><div>Python</div></div>
                    <div className='text-xl m-0 '><SiExpress className='inline-block text-3xl' /><div>Express</div></div>
                    <div className='text-xl m-0 '><SiFlask className='inline-block text-3xl' /><div>Flask</div></div>
                    <div className='text-xl m-0 '><SiMysql className='inline-block text-3xl' /><div>MySQL</div></div>
                    <div className='text-xl m-0 '><SiMongodb className='inline-block text-3xl' /><div>MongoDB</div></div>
                    <div className='text-xl m-0 '><SiNginx className='inline-block text-3xl' /><div>NginX</div></div>
                    <div className='text-xl m-0 '><SiPostgresql className='inline-block text-3xl' /><div>PostgreSQL</div></div>
                    <div className='text-xl m-0 '><SiAmazonaws className='inline-block text-3xl' /><div>AmazonAWS</div></div>
                    <div className='text-xl m-0 '><SiTypescript className='inline-block text-3xl' /><div>TypeScript</div></div>
                  </div>
                </div>

                <div className=''>
                  <div className='text-3xl lg:text-4xl font-bold p-5'>Website Design Technologies</div>
                  <div className='flex flex-wrap gap-5 justify-center text-center p-10'>
                    <div className='text-xl m-0 '><FaWordpress className='inline-block text-3xl' /><div>Wordpress</div></div>
                    <div className='text-xl m-0 '><SiFigma className='inline-block text-3xl' /><div>Figma</div></div>
                    <div className='text-xl m-0 '><SiWix className='inline-block text-3xl' /><div>Wix</div></div>
                    <div className='text-xl m-0 '><SiElementor className='inline-block text-3xl' /><div>Elementor</div></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {
            // <----------------------------------------REVIEWS AND FEEDBACK ------------------------------------------------------------------>
          }
        <section className='container text-center lg:ps-36' id='reviews'>
          <div className='sub_title font-bold py-5'>REVIEWS AND FEEDBACK</div>
          <div><h2 className=' font-bold text-4xl '>What My Customers Said</h2></div>
          <div className='flex gap-2 justify-center '>
            <div className=' w-3 h-3 border-b-4 border-red ' />
            <div className=' w-20 h-3 border-b-4 border-red ' />
          </div>
          <div className='py-16'>
            <div className='relative md:flex md:justify-center rounded-full z-10 overflow-hidden after:absolute after:bg-red after:mx-auto after:left-36 after:content-[""] after:pt-20 after:top-12 after:h-64 after:w-64 after:-z-20 after:-translate-x-1/2 after:rounded-full md:after:left-2/4 md:after:top-16'>
              <img src='../src/assets/images/review.png' className='mx-auto w-60 ' />
            </div>
            <div className='font-semibold text-lg opacity-70 py-5 lg:max-w-3xl lg:text-center lg:mx-auto'>“Targetingconsultation discover apartments. ndulgence off under folly death wrote cause her way spite.
              Plan upon yet way get cold spot its week. Almost do am or limits hearts.
              Resolve parties but why she shewing. She sang know now always remembering to the point.”
            </div>
            <div className='font-bold text-2xl py-1'>Daranijo Timothy</div>
            <div className='font-bold text-red text-lg'>CEO theDataPath</div>
          </div>
        </section>
        {
            // <----------------------------------------------AVAILABLE FOR FREELANCE---------------------------------------------------------->
          }
        <section className='container text-center lg:ps-36'>
          <div className='p-4 bg-layout_black lg:p-20'>
            <h2 className='font-bold text-4xl py-3 lg:text-7xl'>I'm Available For Freelance Work</h2>
            <div className='py-8'><button className='px-8 bg-red py-4 rounded-full text-xl font-bold'>Hire Me Now</button></div>
          </div>
        </section>
        {
            // <---------------------------------------BLOGS ------------------------------------------------------------------>
          }
        <section className='container text-center py-5 lg:ps-36'>
          <div className='sub_title font-bold py-5'>BLOGS</div>
          <div><h2 className=' font-bold text-4xl '>Learn About Softwares</h2></div>
          <div className='flex gap-2 justify-center '>
            <div className=' w-3 h-3 border-b-4 border-red ' />
            <div className=' w-20 h-3 border-b-4 border-red ' />
          </div>
          <div className='py-8 md:w-80 md:py-10'>
            <div className='text-left'>
              <div><img src='../src/assets/images/blog1.jpg' className='rounded-xl' /></div>
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
          </div>
        </section>
        {
            // <-----------------------------------CONTACT FORM ------------------------------------------------------------------>
          }
        <section className='container lg:flex lg:items-center lg:ps-36 lg:justify-center' id='contact'>
          <div className='m-2 xl:w-3/5'>
            <div className=' bg-layout_black p-8 md:p-12'>
              <div className='font-bold text-4xl py-4'>
                Let's talk?
              </div>
              <div>It's all about the humans behind a brand and those experiencing it, br we're right there. In the middle performance quick. </div>

              <form className='flex flex-col space-y-5 my-6' onSubmit={handleSubmit}>
                <div className='flex flex-col space-y-2'>
                  {inputs.filter((input) => input.id < 3).map((input) => {
                    return (
                      <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                      />
                    );
                  })}
                </div>
                {inputs.filter((input) => input.id > 2).map((input) => {
                  return (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  );
                })}
                <textarea value='Tell Us About Your Project' rows={10} className='p-4 text-sm bg-layout_black opacity-60' />
                <div className='font-bold text-lg md:text-xl'>
                  <button className=' py-2 px-10 lg:px-32 md:px-12 md:py-5 bg-red rounded-full'>Send Message </button>
                </div>
              </form>
            </div>
          </div>

          <div className='container flex flex-col gap-y-10 py-20 xl:w-2/5'>
            <div className='text-center '>
              <div className='text-3xl rounded-md bg-blue w-fit mx-auto'><SiMinutemailer className='inline-block p-3 text-6xl' /></div>
              <div className='py-2'>MY EMAIL</div>
              <div className='font-bold text-lg'>adefeyisayo998@gmail.com</div>
              <div className='font-bold text-lg'>haywhyoh998@gmail.com</div>

            </div>
            <div className='text-center'>
              <div className='text-3xl rounded-md bg-red w-fit mx-auto'><SlLocationPin className='inline-block p-3 text-6xl' /></div>
              <div className='py-2'>My Location</div>
              <div className='font-bold text-lg'>Lagos, Nigeria</div>
              <div className='font-bold text-lg'>West Africa</div>

            </div>
            <div className='text-center'>
              <div className='text-3xl rounded-md bg-yellow w-fit mx-auto'><FaHeadphonesAlt className='inline-block p-3 text-6xl' /></div>
              <div className='py-2'>PHONE NO</div>
              <div className='font-bold text-lg'>+234-8142064474</div>

            </div>
          </div>
        </section>
        {
            // <------------------------------------------------------FOOTER ------------------------------------------------------------------>
          }
        <footer className='bg-black_bg mt-10 lg:ps-36'>
          <div className='p-10 opacity-80 lg:font-bold lg:text-xl '>
            Copyright <span className='px-1'>{year}</span> Adedayo Samuel. Inspiration from Ambrox
          </div>
        </footer>
      </div>
    </div>
  );
}
export default App;
