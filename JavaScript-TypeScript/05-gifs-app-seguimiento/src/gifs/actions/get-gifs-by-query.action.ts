import { GiphyResponse } from "../interfaces/giphy.response"
import { Gif } from "../interfaces/gif.interface"
import { giphyApi } from "../api/giphy.api"

export const getgifsByquery = async(query: string): Promise<Gif[]> =>{

    // fetch (
    //     `https://api.giphy.com/v1/gifs/search?api_key=z3W3kDWJkKbDC1QiiqpeOcvU8O4D1anj&q=${query}&limit=10&lang=es`
    // )
    // const response = await axios.get<GiphyResponse>(
    //     'https://api.giphy.com/v1/gifs/search', 
    //     {
    //         params: {
    //             q: query,
    //             limit: 10,
    //             lang: 'es',
    //             api_key: import.meta.env.VITE_GYPHY_API_KEY,
    //         }
    //     }
    // )

    const response = await giphyApi<GiphyResponse>('/search', {
        params: {
            q: query,
            limit: 25
        }
    })

    console.log(response.data)
    return response.data.data.map((gif) =>({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),

    }));

}