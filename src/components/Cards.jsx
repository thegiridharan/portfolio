import projects from "@/data/projects.json";
import {FolderKanban} from "lucide-react";
import {motion} from "motion/react";
import Image from "next/image";

export default function Cards(){
    const projectCount = () => {
        let count = 0;
        projects.map((project) => count += 1);
        return count;
    }

    return(
        <div className="mx-[20px]">
            <div className="flex flex-col gap-[16px] mx-[calc(5%)]">
                <p className="text-[26px] font-semibold">Projects</p>
                <div className="flex flex-row gap-[10px] items-center font-extralight">
                    <FolderKanban className="font-extralight p-[2px] opacity-60" />
                    <p className="font-extralight opacity-60">{projectCount()} projects </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-evenly gap-[25px] px-[20px] pt-[50px] pb-[20px] min-h-[calc(100vh-180px)]">
                {projects.map((project, index) => (
                    <motion.div whileHover={{scale: 1.025}} key={index} className="h-[370px] w-[400px] transition-all duration-300 bg-white rounded-[7px] outline-6 outline-black/10">
                        <Image src={project.image} alt={"Project Image"} height={100} width={100} quality={100} className="h-[180px] w-full" />
                        <div className="px-[14px] flex flex-col gap-[8px]">
                            <p className="font-semibold text-[22px] pt-[5px]">{project.title}</p>
                            <p className="font-light">{project.description}</p>
                            <p className="opacity-50">{project.techstack}</p>
                            <div className="flex items-center justify-center">
                                <a href={project.link} target="_blank" className="mt-[5px] w-fit px-[15px] py-[8px] rounded-full bg-accent hover:outline-none hover:text-white hover:bg-black transition-all duration-300">Live Link</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
