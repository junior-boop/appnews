'use client'
import { Container } from "@/components"
import { GetDate as gd } from '@/utile/handleDate'
import Link from "next/link"
import { MenuItemProps } from "./type"
import { SystemUiconsSearch } from "@/components/icones"

export default function Navbar(){

    return(
        <div className="border-b border-slate-300">
            <Container>
                <div >
                    <div className="grid grid-cols-3">
                        <div className="flex items-center font-semibold">
                            {gd().journee} {gd().jour} {gd().mois}
                        </div>
                        <div className="logo_mag">
                            THE MAG
                        </div>
                        <div className="flex items-center justify-end">
                            <button className="btn font-semibold">
                                S’abonner
                            </button>
                        </div>
                    </div>
                    <Menu />
                </div>
            </Container>
        </div>
    )
}

function Menu (){
    return(
        <div className="menu md:grid grid-cols-3 items-end h-14">
            <div className="flex col-span-2 gap-[6.4vmin]">
                <MenuItem actif href="/" titre="A la Une"/>
                <MenuItem href="/" titre="Politique"/>
                <MenuItem href="/" titre="Sport"/>
                <MenuItem href="/" titre="Culture"/>
                <MenuItem href="/" titre="Reportage"/>
                <MenuItem href="/" titre="Short"/>
                
            </div>
            <div className="flex justify-end">
                <div className="flex items-center h-14 gap-4 font-semibold">
                    <SystemUiconsSearch className="text-slate-700" />
                    Recherche
                </div>
            </div>
        </div>
    )
}


const MenuItem = ({ href = "/", titre, actif} : MenuItemProps) => {
    return(
        <Link href={href} className="flex flex-col items-center">
            <div className=" font-bold mb-2">{titre}</div>
            <div className={`${ actif ? 'bg-[#FF4242]' : null} w-14 h-1`}></div>
        </Link>
    )
}