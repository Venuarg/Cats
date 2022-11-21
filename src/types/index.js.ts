export interface Photo {
    id: string
    url: string
    width: number
    height: number
}

export interface Breed {
    id: string
    name: string
}

export interface Options {
    breed: string
    sortName: string
}