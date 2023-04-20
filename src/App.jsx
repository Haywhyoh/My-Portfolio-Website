import './App.css';
import { useState } from 'react';
import hand from './assets/images/hand.png';
import myPic from './assets/images/myPic.png';
import picBg from './assets/images/7.png';
import Service from './components/Service';
import ProjectCard from './components/ProjectCard';
import serviceList from './data/services.json';
import projects from './data/projectCard.json';
import { SlLocationPin } from 'react-icons/sl';
import { FaWordpress, FaReact, FaNodeJs, FaPython, FaLinux, FaHtml5, FaCss3Alt, FaBootstrap, FaUserEdit, FaRegCalendarAlt } from 'react-icons/fa';
import { SiUpwork, SiFiverr, SiFlask, SiMongodb, SiExpress, SiMinutemailer, SiJavascript, SiTypescript, SiNginx, SiMysql, SiPostgresql, SiTailwindcss, SiAmazonaws, SiFigma, SiWix, SiElementor } from 'react-icons/si';
import FormInput from './components/FormInput';
function App () {
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
  return (
    <div className=' h-fit w-screen font-body  bg-[url("./src/assets/images/banner.jpeg")] bg-cover bg-fixed bg-center text-white'>
      <section className='container pt-40 text-center'>
        <div className='py-10'>
          <h2 className='text-4xl font-extrabold flex gap-x-3 py-4'>Hi <img className='w-10' src={hand} /> I'm Samuel</h2>
          <div className='text-2xl font-bold'>FullStack Engineer</div>
          <div className='pt-9'><button className='bg-dark_blue px-10 py-4 rounded-3xl font-bold text-xl'>My Resume</button></div>
        </div>
        <div className='relative h-fit'>
          <img src={myPic} className='absolute w-80 z-40 buttom-30' />
          <img className=' w-96 h-80 absolute -top-8 ' src={picBg} />
        </div>
      </section>

      <section className='text-center bg-layout_black mt-64 container'>
        <div className='py-4'><h2 className='sub_title font-bold'>My Expertise</h2></div>
        <div className='py-5'><h2 className=' font-bold text-4xl'>What I Do</h2></div>
        <div className='flex gap-1 justify-center '>
          <div className=' w-3 border-b-4 border-red ' />
          <div className=' w-20 border-b-4 border-red ' />
        </div>
        <div className='py-5'>
          <div>
            {serviceList.map(service => (
              <Service
                key={service.id}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>
      <section className=' text-center py-10 container '>
        <div><h2 className='sub_title font-bold'>Recent Work</h2></div>
        <div className=' text-4xl font-bold py-5'> Look at my portfolio and give a feedback</div>
        <div className=' text-5xl font-bold py-5'> 10 <br /> <span className=' font-medium text-2xl'>Completed Projects</span></div>
        <div className=' text-5xl font-bold py-5'> 150+ <br /><span className='font-medium text-2xl'>Tech Articles</span></div>

      </section>
      <section className=' container'>
        <div className='border-white w-full border-b-2' />
        <div className=' text-6xl font-bold py-5 text-center py-12'> 98% <br /><span className='text-2xl'>Positive Rating</span></div>
      </section>
      <section className='container'>
        <div>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </section>
      <section className='container'>
        <img src='../src/assets/images/myPic.png' className='mx-auto w-60 ' />
      </section>
      <section className='container text-center'>
        <h2 className='sub_title font-bold py-5'>About Me</h2>
        <h2 className='text-4xl font-bold'>I can help you develop and maintain your Websites and softwares</h2>
        <p className='py-5 font-medium text-lg'> Hi, my name is Adedayo Samuel and I began using WordPress when it first began.
          I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.
          One of my specialties is taking an idea from scratch and creating a full-fledged platform.
          I go beyond to produce sites with a unique.
        </p>
        <div className='flex flex-col justify-center gap-y-10'>
          <div>
            <div className='text-6xl m-0 text-upwork'><SiUpwork className=' inline-block' /></div>
            <h2 className='font-bold text-xxl '>Professional Wordpress and MERN Delover</h2>
            <p className='opacity-60 font-semibold'>Top Rated Freelancer - Upwork</p>
          </div>
          <div>
            <SiFiverr className='text-8xl rounded-full bg-fiverr p-4 inline-block' />
            <h2 className='font-bold text-xxl py-2'>Professional Technical Writer and Wordpress Developer</h2>
            <p className='opacity-60 font-semibold'>Level 2 Freelancer - Fiverr</p>
          </div>

        </div>
      </section>
      <section className='text-center container'>
        <div className='sub_title font-bold py-5'>Skills and Technologies </div>
        <div className='flex flex-wrap gap-y-5 '>
          <button className='bg-red  rounded-full  px-10 py-4 '>
            <div className='font-bold text-md'>FrontEnd Development</div>
          </button>
          <button className='bg-layout_black2 rounded-full  px-10 py-4'> <div className='font-bold text-md'>BackEnd Development</div></button>
          <button className='bg-layout_black2 rounded-full  px-16 py-4'> <div className='font-bold text-md'>Website Design</div></button>
        </div>
        <div className='flex flex-wrap gap-8'>
          <div className='flex flex-wrap gap-5 border justify-center text-center border-white p-4 bg-black_bg'>
            <div className='text-xl m-0 '><FaReact className='inline-block text-3xl' /><div>React</div></div>
            <div className='text-xl m-0 '><SiJavascript className='inline-block text-3xl' /><div>JavaScript</div></div>
            <div className='text-xl m-0 '><FaCss3Alt className='inline-block text-3xl' /><div>CSS3</div></div>
            <div className='text-xl m-0 '><FaHtml5 className='inline-block text-3xl' /><div>HTML</div></div>
            <div className='text-xl m-0 '><SiTailwindcss className='inline-block text-3xl' /><div>TailWind</div></div>
            <div className='text-xl m-0 '><FaBootstrap className='inline-block text-3xl' /><div>Bootstrap</div></div>
            <div className='text-xl m-0 '><SiTypescript className='inline-block text-3xl' /><div>TypeScript</div></div>
          </div>
          <div className='flex flex-wrap gap-5 border justify-center text-center border-white p-4 bg-black_bg '>
            <div><FaNodeJs /><div>Node</div></div>
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
          <div className='flex flex-wrap gap-5 border justify-center text-center border-white p-4 bg-black_bg'>
            <div className='text-xl m-0 '><FaWordpress className='inline-block text-3xl' /><div>Wordpress</div></div>
            <div className='text-xl m-0 '><SiFigma className='inline-block text-3xl' /><div>Figma</div></div>
            <div className='text-xl m-0 '><SiWix className='inline-block text-3xl' /><div>Wix</div></div>
            <div className='text-xl m-0 '><SiElementor className='inline-block text-3xl' /><div>Elementor</div></div>
          </div>
        </div>
      </section>
      <section className='container text-center'>
        <div className='sub_title font-bold py-5'>REVIEWS AND FEEDBACK</div>
        <div><h2 className=' font-bold text-4xl '>What My Customers Said</h2></div>
        <div className='flex gap-2 justify-center '>
          <div className=' w-3 h-3 border-b-4 border-red ' />
          <div className=' w-20 h-3 border-b-4 border-red ' />
        </div>
        <div className='py-16'>
          <div className='relative rounded-full z-10 overflow-hidden after:absolute after:bg-red after:left-36 after:content-[""] after:pt-20 after:top-12 after:h-64 after:w-64 after:-z-20 after:-translate-x-1/2 after:rounded-full'><img src='../src/assets/images/review.png' className='mx-auto w-60 ' /></div>
          <div className='font-semibold text-lg opacity-70 py-5'>“Targetingconsultation discover apartments. ndulgence off under folly death wrote cause her way spite.
            Plan upon yet way get cold spot its week. Almost do am or limits hearts.
            Resolve parties but why she shewing. She sang know now always remembering to the point.”
          </div>
          <div className='font-bold text-2xl py-1'>Daranijo Timothy</div>
          <div className='font-bold text-red text-lg'>CEO theDataPath</div>
        </div>
      </section>
      <section className='container text-center'>
        <div className='p-4 bg-layout_black'>
          <h2 className='font-bold text-4xl py-3'>I'm Available For Freelance Work</h2>
          <div className='py-8'><button className='px-8 bg-red py-4 rounded-full text-xl font-bold'>Hire Me Now</button></div>
        </div>
      </section>
      <section className='container text-center py-5'>
        <div className='sub_title font-bold py-5'>BLOGS</div>
        <div><h2 className=' font-bold text-4xl '>What I Know About Softwares</h2></div>
        <div className='flex gap-2 justify-center '>
          <div className=' w-3 h-3 border-b-4 border-red ' />
          <div className=' w-20 h-3 border-b-4 border-red ' />
        </div>
        <div className='py-8'>
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
      <section className='m-2'>
        <div className=' bg-black_bg p-8'>
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
            <div className='font-bold text-xl'>
              <button className=' py-2 px-32 bg-red rounded-full'>Send</button>
            </div>
          </form>
        </div>
      </section>
      <section className='container'>
        <div className='text-center'>
          <div className='text-6xl rounded-md bg-blue w-24 mx-auto'><SiMinutemailer className='inline-block p-3 text-8xl' /></div>
          <div className='py-2'>OUR EMAIL</div>
          <div className='font-bold text-lg'>adefeyisayo998@gmail.com</div>
          <div className='font-bold text-lg'>haywhyoh998@gmail.com</div>

        </div>
        <div className='text-center'>
          <div className='text-6xl rounded-md bg-blue w-24 mx-auto'><SiMinutemailer className='inline-block p-3 text-8xl' /></div>
          <div className='py-2'>OUR EMAIL</div>
          <div className='font-bold text-lg'>adefeyisayo998@gmail.com</div>
          <div className='font-bold text-lg'>haywhyoh998@gmail.com</div>

        </div>
        <div className='text-center'>
          <div className='text-6xl rounded-md bg-blue w-24 mx-auto'><SiMinutemailer className='inline-block p-3 text-8xl' /></div>
          <div className='py-2'>OUR EMAIL</div>
          <div className='font-bold text-lg'>adefeyisayo998@gmail.com</div>
          <div className='font-bold text-lg'>haywhyoh998@gmail.com</div>

        </div>
      </section>
    </div>
  );
}
export default App;
