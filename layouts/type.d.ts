import { ReactNode } from "react"

export type MenuItemProps = {
    href : string,
    titre : string,
    actif? : boolean
}

export type GridProp = {
    children? : ReactNode
}