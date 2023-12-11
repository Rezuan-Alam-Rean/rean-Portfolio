
import { Link, NavLink } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai"
import resume from "../../public/resume/rean-resume.pdf"

const Navbar = () => {

    const navRoutes = (
        <>
          <li className="md:text-white   font-poppins cursor-pointer">
            <NavLink className=" font-bold hover:text-blue-700" to="/">Home</NavLink>
          </li>
          <li className="md:text-white  font-poppins cursor-pointer">
            <a href="#about"  className=" font-bold hover:text-blue-700">About</a>
          </li>
   
           {/* <li className="md:text-white  font-poppins cursor-pointer"> 
           <a href="#contact"  className=" font-bold hover:text-blue-700">Contact</a>
          </li> */}
         
           <li className="md:text-white  font-poppins cursor-pointer"> 
           <a href="#project"  className=" font-bold hover:text-blue-700">Project</a>
          </li>
           <li className="md:text-white  font-poppins cursor-pointer"> 
           <a href="#skills"  className=" font-bold hover:text-blue-700">My Skills</a>
          </li>
           <li className="md:text-white  font-poppins cursor-pointer"> 
           <NavLink to={"/allProject"}  className=" font-bold hover:text-blue-700">All Project</NavLink>
          </li>
         
          
        </>
      );
  
    return (
        <div className="navbar bg-slate-900  w-full fixed z-30 top-0 left-0 py-5   shadow-sm ">


  <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost bg-purple-300 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-300 rounded-box w-52"
          >
            
           {navRoutes}
          </ul>
        </div>
    
       <Link to="/">
       
       <div>
    
        <p className="text-2xl ml-10 text-white font-extrabold">
          Rezuan<span className="text-pink-600 ">Rean</span>
        </p>
     
        </div>
        </Link>
          
      </div>
      <div className="navbar-center hidden lg:flex text-black">
        <ul className="menu menu-horizontal px-1   font-poppins cursor-pointer" >
        {navRoutes}
        </ul>
      </div>
    
           
      <div className="navbar-end mr-10 hover:-hue-rotate-90 group duration-300">
   <a href={resume} download={resume}>  
   
   <button className="btn sm:flex sm:flex-row btn-primary bg-purple-500 "> <span className="text-white  font-bold">DownLoad Resume </span>  <span className=" group-hover:rotate-90 duration-300 "><AiOutlineArrowRight size={25}></AiOutlineArrowRight></span> </button>
   </a>
         
      </div>




    </div>
    );
};

export default Navbar;