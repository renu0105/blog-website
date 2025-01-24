import Image from "next/image";
export const metadata = {
  title: "About Page",
  description: "About description",
};
const AboutPage = () => {
  return (
    <div className="flex gap-[100px] ">
      <div className="flex flex-col gap-[40px]">
        <h2 className="text-blue-600 text-2xl font-bold ">About Agency</h2>
        <h1 className="sm:text-3xl text-6xl font-semibold py-2 ">
          We Create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className="text-[20px] font-[300]">
          We create digital ideas that are bold , bigger ,brave and better. we
          believe in good ideas flexibility and precission Our special Team best
          consulting & finance solution provider. Wide range of web and software
          development services.
        </p>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-blue-600 text-2xl font-bold "> 10 k+</h1>
            <p className="text-lg py-3">Year of experience</p>
          </div>
          <div>
            <h1 className="text-blue-600 text-2xl font-bold ">234 k+</h1>
            <p className="text-lg py-3">People reached</p>
          </div>
          <div>
            <h1 className="text-blue-600  text-2xl font-bold">5 k+</h1>
            <p className="text-lg py-3">Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="flex relative">
        <Image
          src="/about.png"
          alt=""
          width={1000}
          height={800}
          className="object-contain sm:w-[1500px]"
        />
      </div>
    </div>
  );
};
export default AboutPage;
