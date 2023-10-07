import { FieldElementProps } from "./types"

export default function Field(){
    return(
        <div className='prime bg-slate-100 xl:flex flex-col relative field'>
            <div className="px-4 py-3 border-b border-slate-300 font-semibold text-slate-500">Fil d’actualité</div>
            <div className="flex-1 overflow-hidden">
                <Element sujet="Cameroun" titre = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Element sujet = 'Fecafoot' titre="Sed porta porta eros, ac sollicitudin odio condimentum ac. Duis varius feugiat nunc, non condimentum lorem fringilla non. " />
                <Element  sujet="CAN Cote d'Ivoire 2024" titre="Praesent vel auctor elit. Pellentesque elementum gravida efficitur."/>
            </div>
            <div className="absolute bottom-0 w-full px-4 py-3 fieldBtn flex items-center justify-center font-semibold text-base text-slate-500 cursor-pointer ">
                Voir plus
            </div>
        </div>
    )
}

function Element({sujet, titre} : FieldElementProps){
    return(
        <div className="p-4"> 
            <div className="text-sm font-medium text-[#FF4242] flex gap-3 items-center"> <span className="inline-block w-[1vmin] aspect-square rounded-full bg-principal"></span>  <span className="inline-block font-semibold"> {sujet}</span> 01 min</div>
            <div className="pl-4">
                <div className="text-base font-semibold">{titre}</div>
            </div>
        </div>
    )
}