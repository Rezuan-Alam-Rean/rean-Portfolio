/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import animate from "../assets/aboutLottie.json"
import useTitle from "../hooks/useTitle";
const About = () => {
  useTitle('About')
    return (
        <>
    <p className="text-5xl font-bold text-center text-white mb-5 mt-10">
        About Me
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-8  border-dimBlue text-white mb-10"></h1>

   
   <div id="about"
      className={`xl:mt-12 flex md:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
        {/* lottie */}
        <div className="text-center md:mt-16 mt-1  md:w-1/3">
        <Lottie className="" animationData={animate} loop={true} height={100} width={100} />
      </div>
    {/* form */}
      <div
        
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl md:w-1/2 my-5'
      >
       <div className="p-3 leading-6 ">
        <p className="text-white font-poppins ">
          <span className="text-xl font-bold text-white"> Hey there! </span> <br />
           I'm Rezuan Alam Rean ......
          I'm a passionate MERN stack developer with a solid foundation in React, JavaScript, Node.js, MongoDB, HTML, and CSS. <br />
        I'm also a Computer Science and Engineering student with a passion for coding and innovation. <br /> I'm currently expanding my knowledge by learning Next.js to become a well-rounded full-stack developer. <br /> I'm excited about learning new technologies and contributing to open-source projects. <br />Thank you .
</p>



        <a href="#contact">
        <button className="btn bg-purple-100">Contact Me </button>
        </a>
       </div>

      
      </div>
    </div>
   
   
   </>
    );
};

export default About;