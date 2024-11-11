export default function Home() {
    return (
        <div>
            <div className=" ml-[30%] mt-6 bg-black w-40 p-2 rounded-2xl shadow-xl items-center justify-center">
            <span className="text-white text-3xl font-bold font-mono focus:border-customColor2 ">Services</span>
            </div>
            <div className="w-[70%] h-[450px] bg-black mx-[15%] rounded-3xl rounded-tr-none rounded-tl-none shadow-2xl mt-5">
            <div className="w-full h-0.5 bg-white"></div>
            <div className="block lg:flex">
                <div className="text-white text-md mt-3 ml-0 lg:ml-16 md:text-xl">
                    <div className="font-bold">Front-End</div>
                    <div className="font-bold">Development</div>
                </div>
                <div className="w-0.5 h-[400px] bg-white ml-5 lg:ml-20 hidden lg:block"></div>
                <div className="">
                    <div className="text-white text-sm p-3 md:text-lg">
                    I offer professional front-end development services, crafting visually appealing and highly responsive websites that prioritize user experience. By the latest technologies such as HTML5, CSS3, Typescript, I ensure your website is fast, accessible, and compatible across all devices. Whether you need a simple landing page or a complex web application, I am dedicated to transforming your ideas into sleek, functional designs that captivate users and deliver results.
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}