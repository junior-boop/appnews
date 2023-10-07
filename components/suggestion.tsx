import { SuggestionElementProps } from "./types"

type Suggestion = {
    titre : string 
}


export default function Suggestion({titre} : Suggestion){
    return(
        <div>
            <div className="text-xl font-bold mb-[.7em]">{titre}</div>
            <div className="flex flex-col gap-[2.8vmin]">
                <Element image="/images/ukraine.png" titre="Leur guerre notre crise mondial : Quand l’Ukraine fait grimpter les prix sur le marché..." />
                <Element image="/images/niger.png" titre="Une revolution aux feminin ? Les femmes ont joué que rôle ?" />
                <Element image="/images/frontiere.png" titre="La zone des trois frontières : La naissance d’une nouvelle alliance" />
            </div>
        </div>
    )
}

function Element({image, titre} : SuggestionElementProps){
    return(
        <div className="flex gap-4">
            <div className="w-[32%] aspect-square overflow-hidden">
                <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 font-semibold">
                {titre}
            </div>
        </div>
    )
}