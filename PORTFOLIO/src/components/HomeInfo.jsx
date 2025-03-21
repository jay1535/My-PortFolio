import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const HomeInfo = ({currentStage}) => {
    const InfoBox = ({ text, link, btnText }) => (
        <div className="mx-5 relative flex text-white flex-col gap-1 max-w-2xl bg-[#2b77e7] rounded-[10px] border border-[#2b77e7] shadow-[0.6vmin_0.6vmin_#336cc1,1vmin_1vmin_#0092db,1vmin_1vmin_#0092db,0.65vmin_1vmin_#0092db,1vmin_0.65vmin_#0092db] pt-1 pb-10 px-8 mt-[-10px]">
          <p className="font-medium sm:text-xl text-center">{text}</p>
          <Link
            to={link}
            className="bg-white border-white shadow-[0.6vmin_0.6vmin_#fff,1vmin_1vmin_#d2e4ff,1vmin_1vmin_#d2e4ff,0.65vmin_1vmin_#d2e4ff,1vmin_0.65vmin_#d2e4ff] py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-6 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3"
          >
            {btnText}
            <img src={arrow} alt="Arrow icon" className="w-4 h-2 object-contain" />
          </Link>
        </div>
      );
      
      
    const renderContent={
        1:(<h1 className='sm:text-xl sm:leading-snug text-center relative bg-[#2b77e7] rounded-[10px] border border-[#2b77e7] shadow-[0.6vmin_0.6vmin_#336cc1,1vmin_1vmin_#0092db,1vmin_1vmin_#0092db,0.65vmin_1vmin_#0092db,1vmin_0.65vmin_#0092db] py-3 px-8 text-white mx-5'>Hi I am <span className='font-semibold'>Jayant 👋</span>
        <br />
        An engineering student who loves to explore, experiment, and create!
        </h1>
            
        ),
        2:(<InfoBox text="Curious to know the mind behind the code? Here's a glimpse into my journey, passions, and what drives me!" link="/about" btnText="Dive In"/>),
        3:(<InfoBox text="I've gained a variety of skills through hands-on learning and have applied them to projects, always striving to learn and build more!"  link="/projects" btnText="Learn More"/>),
        4:(<InfoBox text="Need a project done or looking for a dev? I'm just a few keystrokes away!"  link="/contact" btnText="Let's Talk"/>),
    }
  return renderContent[currentStage]
}

export default HomeInfo