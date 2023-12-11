
import img from "../../../../assets/Banner/Rean Cover Github v2.jpg";

const Hero = () => {
  return (
    <div className="relative w-full mt-32">
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
