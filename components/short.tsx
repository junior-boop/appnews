import { SystemUiconsPicture } from "./icones"

type short_item = {
    images : string,
    text :  string
}
export function Short_Item({images, text} : short_item){
    return(
        <div className="w-[300px] aspect-[9/16] bg-slate-200 relative">
            <img src={images} alt="" className="w-full h-full object-cover" />
            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center" style = {{backgroundColor : '#0003'}}>
                <div className="font-anton w-[80%] text-4xl text-center text-white">
                    {text}
                </div>
            </div>
            <div className="absolute z-20 bottom-3 left-3">
                <div className="flex items-center gap-3  px-2 py-1 text-white bg-principal text-sm">
                    <SystemUiconsPicture />
                    12
                </div>
            </div>
        </div>
    )
}