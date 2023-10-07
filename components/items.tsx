import { ItemsProps } from "./types";

export default function Items({titre, auteur, image, rubrique} : ItemsProps){
    return(
        <div className="flex flex-col gap-[12px]">
            <div className="w-full aspect-[1.14] relative">
                <img src={image} alt=""  className="w-full h-full object-cover" />
                <div className="font-anton text-xl absolute bottom-[20px] left-[20px] text-white">{rubrique}</div>
            </div>
            <div className="text-[1.14em] font-bold leading-6">{titre}</div>
            <div className="text-sm text-gray-600">{auteur}</div>
        </div>
    )
}