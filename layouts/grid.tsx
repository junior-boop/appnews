import { GridProp } from "./type";

export default function Grid({children} : GridProp) : JSX.Element{
    return <div className="grid_syteme">
    { children }
</div>
}
export function ShortList({children} : GridProp) : JSX.Element{
    return (<div className="overflow-y-hidden overflow-x-auto w-full shortliste">
                { children }
            </div>)
}