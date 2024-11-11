
export default function contact() {
    return (
        <div>
             <div className="ml-[35%] mt-6 bg-black w-48 p-2 rounded-2xl shadow-xl items-center justify-center">
            <span className="text-white text-3xl font-bold font-mono focus:border-customColor2 ">Contact Me</span>
            </div>
            <div className="w-[80%] bg-gradient-to-r from-customColor1 to-customColor4 h-[450px] mx-[10%] rounded-3xl my-8 shadow-xl p-5 pl-8 text-white block xl:flex md:w-[50%] md:ml-[24%]">
                <div className="mt-10 xl:mt-32">
                <div className="font-bold text-2xl md:text-3xl text-customColor6">Muhib Raza</div>
                <div className="font-bold text-2xl md:text-3xl bg-customColor6 w-68 md:w-72">Developer Portfolio</div>
                </div>
                <div className="ml-12 mt-12">
                <div className="font-mono text-lg md:text-xl">
                    DO YOU LOVE THIS PORTFOLIO
                </div>
                <div className="ml-4 mt-4">
                    <div className="text-2xl md:text-3xl"><a href="https://github.com/muhibraza18" target="_blank">Github</a></div>
                    <div className="text-2xl md:text-3xl"><a href="https://www.linkedin.com/in/muhib-raza-324375331/" target="_blank">LinkedIn</a></div>
                    <div className="text-2xl md:text-3xl"><a href="https://www.instagram.com/muhib_raza23/" target="_blank">Instagram</a></div>
                    <div className="font-mono font-bold mt-6 text-sm">Dont Forget To Follow Me</div>
                    </div>
                </div>
            </div>
        </div>
    )
}