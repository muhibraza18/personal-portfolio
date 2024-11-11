
export default function about() {
    return (
      <div>
        <div className="ml-[18%] mt-6 bg-black w-40 p-2 rounded-2xl shadow-xl">
          <span className="text-white text-3xl font-bold font-mono focus:border-customColor2">
            Abo
          </span>
          <span className="text-white text-3xl font-bold font-mono focus:border-customColor2">
            ut me
          </span>
        </div>
        <div className="bg-black w-[80%] h-[750px] ml-[10%] mt-6 rounded-3xl shadow-2xl text-white text-xl p-10 pl-22 pr-22 active:border-customColor2 lg:h-[500px] mb-10 lg:pl-24 lg:pr-24 md:ml-[10%] md:[60%] md:h-[1050px]">
          <div>
            Hi my name is Muhammad Muhib Raza and I am a creative front-end
            developer. My motto is to Turning Ideas into Beautiful, Interactive
            Websites. As a passionate front-end developer, I specialize in
            crafting responsive, user-friendly web experiences. With a strong
            foundation in HTML, CSS, and TypeScript, I combine creativity with
            technical expertise to bring web designs to life. My goal is to build
            functional and engaging websites that enhance user experiences.
          </div>
          <div className="lg:flex gap-32">
            <div className="gap-40 mt-4">
              <div className="">
                <span className="font-bold">Location:</span>
                <span> Karachi</span>
              </div>
              <div className="mt-4">
                <span className="font-bold">Nationality:</span>
                <span> Pakistan</span>
              </div>
            </div>
  
            <div className="gap-40 mt-2">
              <div className="">
                <span className="font-bold">Age:</span>
                <span> 16</span>
              </div>
              <div className="mt-4">
                <span className="font-bold">Study:</span>
                <span> Matriculation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  