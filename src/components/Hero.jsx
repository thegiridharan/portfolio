import projects from "../data/projects.json";
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";

function Header(){
    return(
        <>
            <div className="py-[20px] px-[40px] flex items-center justify-between">
                <div className="flex flex-row gap-[10px]">
                    <Image src={"/profile.jpg"} alt={"Profile Image"} height={100} width={100} className="rounded-full h-[30px] w-[30px] object-cover" />
                    <p className="flex items-center">thegiridharan.</p>
                </div>
                <div className="flex gap-[20px]">
                    <a href="/projects" className="py-[8px] px-[18px] rounded-full hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-300">Projects</a>
                    <a href="/contactus" className="py-[8px] px-[18px] rounded-full hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-300">Contact Us</a>
                </div>
            </div>
        </>
    );
}

function Main(){
    return(
        <div className="flex flex-col sm:grid sm:grid-cols-3 items-center justify-between gap-[20px] py-[20px] px-[clamp(3rem,4vw,4.5rem)] h-[calc(100vh-82px)]">
            <div className="sm:col-span-2">
                <p className="font-semibold text-[clamp(4rem,6vw,8rem)]">I'm Giridharan.</p>
                <p className="text-[24px] font-extralight">Passionate full stack developer focused on real-world impact.</p>
            </div>
            <div className="sm:col-span-1 flex items-center justify-center">
                <div className="flex flex-col gap-[28px]">
                    <p className="text-[19px] text-gray-500 font-light font-sans">Sample Projects</p>
                    {projects.map((project, index) => {
                        if (index < 3){
                        return(
                        <div key={index}>
                            <a href="/projects"><p className="border-b-1 px-[7px] py-[5px] w-[200px] flex flex-row justify-between">{project.title}<ArrowUpRight /></p></a>
                        </div>
                    )}})}
                </div>
            </div>
        </div>
    );
}

export default function Hero(){
    return(
        <div className="bg-gray-100">
            <Header />
            <Main />
        </div>
    );
}
