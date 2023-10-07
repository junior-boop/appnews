import { SystemUiconsEye } from "./icones";

export default function Bref(){
    return(
        <div className='prime bg-slate-100 xl:flex flex-col relative field'>
            <div className="px-5 py-3 font-semibold text-principal">Bref</div>
            <div className="flex-1 overflow-hidden px-5">
                <div className="font-anton text-2xl">La propreté dans la ville de Yaounde, toujours en debat entre la maire et Hysacam</div>
                <div className="mt-4 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor nulla, placerat quis vehicula sed, lobortis tincidunt justo. Ut non tellus facilisis justo lobortis...
                </div>
            </div>
            <div className="absolute bottom-0 w-full px-4 py-3 fieldBtn flex items-center font-semibold text-base text-slate-500 cursor-pointer gap-4">
                <SystemUiconsEye className="" /><span className="font-medium">24 lecteurs</span>
            </div>
        </div>
    )
}