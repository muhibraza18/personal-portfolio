import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
<div className="main"> 
  <div className="container relative mt-12">
  <div className="static top-[-20px] w-[70%] bg-gradient-to-r from-customColor1 to-customColor4 ml-[11%] rounded-2xl my-14 z-10 shadow-xl p-5 pl-8 xl:absolute md:h-[410px] xl:w-[40%]">

    <div className="text-customColor5 text-2xl my-2 sm:text-3xl">
      <span>code</span>
    </div>
    <div className="text-white my-2 text-3xl sm:text-5xl">
      Hi, My name is
    </div>
    <div className="text-customColor6 my-2 font-bold text-3xl sm:text-5xl">
      Muhib Raza
    </div>
    <div className="text-white my-2 text-3xl sm:text-5xl">and I am passionate</div>
    <div className="text-customColor6 my-2 font-bold text-3xl sm:text-5xl">Front-End Developer</div>
    <div
     className="text-customColor5 text-3xl">/code
    </div>
  </div>
  <div>
    <Image 
      src="https://media.istockphoto.com/id/1312850689/vector/matrix-background-binary-code-texture-falling-green-numbers-data-visualization-concept.jpg?s=612x612&w=0&k=20&c=l1xAzPJUjbROnui5McM-_vbDswAg5OoSzwJuFpdj3WE=" 
      alt="image" 
      width={750} 
      height={550} 
      className="rounded-tr-3xl rounded-br-3xl rounded-tl-lg rounded-bl-lg ml-[43%] shadow-md hidden xl:block" 
    />
  </div>
  </div>


    {/* for button */}
    <div className="block gap-44 ml-[26%] mr-10 xl:flex sm:ml-[35%]">
      <div className="mt-12 xl:mt-8">
        <Link href="/Resume.pdf" target="_blank" className="bg-customColor7 p-3 rounded-3xl font-bold text-xl font-mono shadow-xl text-white border-2 hover:text-customColor5 hover:border-customColor5" >
        Download Resume
        </Link>
        </div>
        <div className="xl:mt-8 mt-12 ml-5 sm:ml-3">
        <Link className="bg-customColor8 p-3 rounded-3xl font-bold text-xl font-mono shadow-xl text-white border-2 hover:text-customColor5 hover:border-customColor5" href="/contact">
        Contact Me
        </Link>
        </div>
      </div>
    </div>

  );
}
