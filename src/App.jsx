import './App.css';
import hand from './assets/images/hand.png';
import myPic from './assets/images/myPic.png';
import picBg from './assets/images/7.png';
import Service from './components/Service';
import ProjectCard from './components/ProjectCard';
import serviceList from './data/services.json';
import projects from './data/projectCard.json';
function App () {
  return (
    <div className=' h-fit w-screen bg-[url("./src/assets/images/banner.jpeg")] font-body bg-cover' >
      <section className='text-white'>
        <div className='container'>
          <h2 className='text-4xl font-bold flex gap-x-3'>Hi <img className='w-10' src={hand} /> I'm Samuel</h2>
          <div className='text-2xl'>FullStack Software Engineer</div>
          <div><button className='bg-dark_blue px-8 py-4 rounded-3xl font-bold'>My Resume</button></div>
        </div>
        <div className='container'>
        <img src={myPic} className='absolute w-80 pt-10'/>
        <img className=' w-96 h-80 ' src={picBg} />
        </div>
      </section>
      <section className='container text-center  bg-layout_black'>
        <div><h2 className='sub_title font-bold'>My Expertise</h2></div>
        <div><h2 className=' font-bold text-4xl text-white'>What I Do</h2></div>
        <div className='flex gap-2 justify-center '>
          <div className=' w-3 h-3 border-b-4 border-red '></div>
          <div className=' w-20 h-3 border-b-4 border-red '></div>
        </div>
        <div>
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
      <section className='container text-center py-10'>
      <div><h2 className='sub_title font-bold'>Recent Work</h2></div>
      <div className='text-white text-6xl font-bold py-5'> Check out my portfolio and give a feedback</div>
      <div className='text-white text-6xl font-bold py-5'> 10 <br></br> <span className='text-2xl'>Completed Projects</span></div>
      <div className='text-white text-6xl font-bold py-5'> 150+ <br></br><span className='text-2xl'>Tech Articles</span></div>
      
      </section>
      <section className='mx-4'>
        <div className='border-white w-full border-b-2'></div>
        <div className='text-white text-6xl font-bold py-5 text-center py-10' > 98% <br></br><span className='text-2xl'>Positive Rating</span></div>
      </section>
      <section>
                <div>
                  {projects.map(project => (
                    <ProjectCard
                      key={project.id}
                      {...project}
                    />
                  ))}
                </div>
      </section>
    </div>
  );
}
export default App;
