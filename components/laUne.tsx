import { Display_2, Display_3 } from ".";
import { LaUneProps } from "./types";

export default function LaUne({image, sujet, titre, description } : LaUneProps) {
    return(
        <div className=" m-auto w-[93vw] md:w-full md:h-full md:relative md:overflow-hidden aspect-[3/4] md:aspect-auto">
            <img src={image} alt="" className=" w-full h-full object-cover" />
            <div className="block md:flex flex-col md:absolute right-0 w-[100%] md:w-[45%] md:h-full top-0 p-[5vmin]  md:p-[2.5vmin] bg-black UneTitreContainer" >
                <div className="md:flex-1 ">
                    <div className="text-principal font-bold text-sm">{sujet}</div>
                    <div className="text-white font-anton uneTitre text-[1.5em] md:text-[2em] ">
                        {titre}
                    </div>
                    <div className=" text-base font-medium text-white mt-2">
                        {description}
                    </div>
                </div>
                <div className="flex text-white items-center gap-3 mt-4 md:mt-0 text-sm">
                    Par Daniel Lobe <span className="w-[7px] aspect-square rounded-full bg-white"></span> Il y a 12min
                </div>
            </div>
        </div>
    )
}