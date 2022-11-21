import axios from "axios";

interface FilterParams {
    breed: string
    limit: number
    category: number | undefined
}

export async function getPhotos (params: FilterParams) {
    return await axios.get('https://api.thecatapi.com/v1/images/search', {
        params: {
            limit: params.limit,
            breed_ids: params.breed || undefined,
            category_ids: params.category || undefined
        }
    })
}