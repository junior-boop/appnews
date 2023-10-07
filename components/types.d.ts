export type displayProp = {
    text?: string,
    contract? : boolean
}

export type FieldElementProps = {
    sujet : string,
    titre : string
}
export type SuggestionElementProps = {
    image : string,
    titre : string
}

export type ItemsProps = {
    titre : string,
    auteur : string,
    image : string,
    rubrique : 'Question' | 'Decryptage' | 'Analyse' | 'Decouvert'
} 

export type LaUneProps = {
    image : string,
    titre : string,
    description : string,
    sujet : string
}