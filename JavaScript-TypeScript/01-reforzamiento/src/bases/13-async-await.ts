import type { ResponseGilphy } from "../data/giphy.response";

const apiKey = 'z3W3kDWJkKbDC1QiiqpeOcvU8O4D1anj&tag=&rating=g';


// codigo limpio
const createImageInsideDom = (url:string) =>{
    
        const imgElement = document.createElement('img');
        imgElement.src = url;
        document.body.appendChild(imgElement);
}


const getRandomGifUrl = async() =>{
        const response = await fetch(
                `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        )
        const {data}: ResponseGilphy = await response.json();

        return data.images.original.url;
}

// finciona exactamente que la linea de abajo
// getRandomGifUrl().then(createImageInsideDom)
getRandomGifUrl().then((url) => createImageInsideDom(url))

