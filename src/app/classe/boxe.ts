interface Composition {
    nom: string;
    quantite: number;
}

export interface Boxe {
    id?: number,
    nom?: string,
    pieces?: number,
    composition?: Composition[],
    saveurs?: string[],
    prix?: number,
    image?: string,
    notes?: number[]
}