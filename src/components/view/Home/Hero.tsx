import Link from "next/link";
import Image from "next/image";
import hero from "../../../../public/assets/hero.png";
import section from "../../../../public/assets/section-bg-2.png";
const Hero = () => {
  return (
    <div className="relative z-10 md:h-[cal(100vh-64px)]">
      <Image
        src={section}
        alt="section"
        className="absolute inset-0 -z-10 block h-full w-full object-cover dark:hidden"
      />
      <div className="mx-auto py-8 sm:py-24 max-w-7xl flex flex-col  items-center justify-between gap-8 md:gap-14 lg:flex-row px-4 sm:px-6 lg:px-8 ">
        <div className="flex text-softBlack flex-col items-center justify-center lg:w-1/2 lg:items-start">
          <p className="text-base mb-1 font-normal">
            Anywhere access easy learning
          </p>
          <h2 className="text-center text-4xl font-semibold text-softBlack md:text-6xl lg:text-start">
            Enroll in Our <span className="text-main">Coaching</span> Center for
            Expert Guide.
          </h2>
          <p className="py-5 text-center text-base font-normal text-darkBg  md:py-10 md:text-xl lg:text-start">
            Working colleraboativly to ensure every student achievement
            academically, socially and emotionally
          </p>
          <Link
            href="/"
            className="flex items-center justify-start rounded-md bg-main px-4 py-2 text-base font-medium text-softWhite shadow hover:bg-grayBlack hover:text-white hover:transition md:text-lg"
          >
            GET STARTED
          </Link>
        </div>
        <div className=" items-center justify-center sm:flex  lg:w-1/2">
          <div className="">
            <Image src={hero} alt="hero" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
