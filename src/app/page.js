import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center gap-[100px] h-full">
        <div className="flex gap-[50px] flex-col sm:gap-[25px]">
          <h1 className="text-7xl font-bold sm:text-6xl pt-7">
            Creative Thought Agency
          </h1>
          <p className="my-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            repellat laborum obcaecati blanditiis a, sit beatae autem
            recusandae, ex itaque assumenda libero quia ab.
          </p>
          <div>
            <button className="bg-blue-600 p-3 my-2 rounded-sm cursor-pointer font-bold">
              Learn more
            </button>
            <button className="bg-white text-black p-3 my-2 mx-7 rounded-sm font-bold">
              Cancel
            </button>
          </div>
          <Image
            className="grayscale-[75%]"
            src="/brands.png"
            alt=""
            width={400}
            height={200}
          />
        </div>
        <div>
          <Image src="/hero.gif" alt="" width={700} height={500} />
        </div>
      </div>
    </>
  );
}
