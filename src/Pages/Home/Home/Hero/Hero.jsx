
import img from "../../../../assets/Banner/Rean Cover Github v2.jpg";
import resume from "../../../../assets/file/resume/rean-resume.pdf";

const Hero = () => {
  return (
    <div className="relative w-full mb-0 mt-28">
      <img
        src={img}
        alt="banner"
        className="w-full h-auto object-cover"
        style={{ maxHeight: "450px" }}
      />
      <div className="  absolute left-4 lg:left-10 right-4 lg:right-0 flex flex-wrap lg:flex-row justify-end lg:justify-start mb-4">
        <a href={resume} download={resume}>
          <button className=" block md:hidden btn sm:flex sm:flex-row bg-purple-100 items-center justify-center sm:justify-start sm:px-1 sm:py-1 text-xs sm:text-sm"> 
            <span className="text-black font-bold">
              Download Resume
            </span>
            <span className="hidden sm:inline-block ml-1">
              {/* <AiOutlineArrowRight size={20} /> */}
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
