
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {

 
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {/* LinkedIn */}
        <li className="flex justify-between items-center w-36 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://www.linkedin.com/in/rezuan-alam-rean/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Linkedin <FaLinkedin size={20}></FaLinkedin>
            </>
          </a>
        </li>

        {/* Github */}
        <li className="flex justify-between items-center w-36 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://github.com/Rezuan-Alam-Rean"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Github <FaGithub size={20}></FaGithub>
            </>
          </a>
        </li>

        {/* Facebook */}
        <li className="flex justify-between items-center w-36 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://www.facebook.com/rean.bhuiyan.94"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Facebook <FaFacebook size={20}></FaFacebook>
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-36 h-10 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="mailto:rezuanrean.cse@gmail.com"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Email <HiOutlineMail size={20}></HiOutlineMail>
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
