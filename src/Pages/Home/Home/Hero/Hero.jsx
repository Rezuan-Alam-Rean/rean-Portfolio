
import img from "../../../../assets/Banner/Rean Cover Github v2.jpg";
import resume from "../../../../assets/file/resume/Resume.pdf";

const Hero = () => {
  return (
    <div className="relative w-full mb-0 mt-28">
      <img
        src={img}
        alt="banner"
        className="w-full h-auto object-cover"
        style={{ maxHeight: "450px" }}
      />
      <div className="  absolute    bottom-0 right-0 ">
        <a href={resume} download={resume}>
          <button className=" block md:hidden btn  btn-sm px-4   bg-purple-600 "> 
            <span className="text-black font-bold ">
              Download <br />Resume
            </span>
           
          </button>
        </a>
      </div> 
    </div>
  );
};

export default Hero;
