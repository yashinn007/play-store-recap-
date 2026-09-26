import HeroImg from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="pt-15 flex flex-col justify-center items-center">
      <h2 className="text-6xl font-bold text-center ">
        We Build
        <br />
        <span className="text-purple-500">Productive</span> Apps
      </h2>
      <p className="mt-3 mb-5 text-gray-500">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <span className="space-x-2">
        <button className="btn">Google Play</button>
        <button className="btn">App Store</button>
      </span>
      <img src={HeroImg} className="mt-7" />
    </div>
  );
};

export default Hero;
