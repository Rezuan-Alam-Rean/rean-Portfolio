
import img from "../../../../assets/Banner/Rean Cover Github v2.jpg";

const Hero = () => {
  return (
    <div className="relative w-full mb-0 mt-24">
      <img
        src={img}
        alt="banner"
        className="w-full h-auto object-cover"
        style={{ maxHeight: "450px" }}
      />
    </div>
  );
};

export default Hero;
