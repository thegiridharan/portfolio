import {ArrowLeft} from "lucide-react";
import ContactForm from "@/components/ContactForm";

function Back(){
    return(
        <div className="flex flex-row justify-between py-[20px] px-[40px]">
            <div className="flex flex-row items-center gap-[15px]">
                <a href="/" className="h-[30px] w-[45px] p-[12px] flex items-center justify-center rounded-[7px] hover:bg-black hover:text-white transition-all duration-300">
                    <ArrowLeft />
                </a>
                <p className="font-semibold">Home</p>
            </div>
            <div className="flex items-center">
                <a href="/projects" className="py-[10px] px-[18px] rounded-full hover:bg-black hover:text-white hover:shadow-2xl transition-all duration-300">Projects</a>
            </div>
        </div>
    );
}

export default function ContactusPage(){
    return(
        <div className="bg-gray-100">
            <Back />
            <ContactForm />
        </div>
    );
}
