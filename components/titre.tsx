import { displayProp } from "./types";

export function Display_1(props : displayProp) {
    return(
        <div className={`display_1 ${props.contract ? 'text-white' : null}`}>
            { props.text }
        </div>
    )
}
export function Display_2(props : displayProp) {
    return(
        <div className={`display_2 ${props.contract ? 'text-white' : null}`}>
            { props.text }
        </div>
    )
}
export function Display_3(props : displayProp) {
    return(
        <div className={`display_3 ${props.contract ? 'text-white' : null}`}>
            { props.text }
        </div>
    )
}