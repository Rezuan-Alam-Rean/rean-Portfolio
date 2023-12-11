import { FaGithub, FaReact, FaStripe } from "react-icons/fa";

import {
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  
} from "react-icons/si";

import { IoLogoCss3 } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { BiLogoFigma } from "react-icons/bi";

const MySkills = () => {
  return (
    <div id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-5xl font-bold text-center text-white mb-5 mt-10">
        My Skills
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-8 border-dimBlue text-white mb-10"></h1>

      <div className="flex flex-wrap gap-4 justify-center" data-aos="zoom-in" data-aos-duration="1000">
        <SkillCard icon={<SiHtml5 size={50} className="object-contain w-[50%] text-orange-600" />} title="HTML5" />
        <SkillCard icon={<IoLogoCss3 size={50} className="object-contain w-[50%] text-blue-500" />} title="CSS" />
        <SkillCard icon={<SiTailwindcss size={50} className="object-contain w-[50%] text-blue-800" />} title="Tailwind" />
        <SkillCard icon={<FaReact size={50} className="object-contain w-[50%] text-blue-800" />} title="React" />
        
        <SkillCard icon={<SiJavascript size={50} className="object-contain w-[50%] text-yellow-500" />} title="J-Script" />
        <SkillCard icon={<SiExpress size={50} className="object-contain w-[50%] text-white" />} title="ExpressJS" />
        <SkillCard icon={<SiMongodb size={50} className="object-contain w-[50%] text-green-800" />} title="MongoDB" />
        <SkillCard icon={<DiNodejs size={50} className="object-contain w-[50%] text-green-800" />} title="NodeJS" />
        <SkillCard icon={<SiFirebase size={50} className="object-contain w-[50%] text-amber-500" />} title="Firebase" />
        
        <SkillCard icon={<BiLogoFigma size={50} className="object-contain w-[50%] text-purple-900" />} title="Figma" />
        <SkillCard icon={<FaGithub size={50} className="object-contain w-[50%] text-white" />} title="GitHub" />
        <SkillCard icon={<FaStripe size={50} className="object-contain w-[50%] text-purple-500" />} title="Stripe" />
        
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg feature-card mt-5 bg-dimBlue">
      <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-dimBlue">
        {icon}
      </div>
      <div className="flex-1 flex flex-col mt-3">
        <p className="font-poppins font-normal text-dimWhite text-[16px] mt-5 leading-[24px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default MySkills;
