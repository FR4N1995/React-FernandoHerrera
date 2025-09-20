import type { ResponseGilphy } from "../data/giphy.response";

const apiKey = 'z3W3kDWJkKbDC1QiiqpeOcvU8O4D1anj&tag=&rating=g';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// codigo limpio
const createImageInsideDom = (url:string) =>{
    
        const imgElement = document.createElement('img');
        imgElement.src = url;
        document.body.appendChild(imgElement);
}

// menos legible que lo de abajo
// myRequest.then((respone) =>{
//     respone.json().then(
//         (data) =>{
//             console.log(data);
//         }
//     )
//     .catch((e) =>{
//         console.log(`El error esa dentro del json ${e}`);
//     })
// })
// .catch((err) =>{
//     console.error(err);
// })
// mas legible sin interfaces
// myRequest
//     .then((response) => response.json())
//     .then((data) =>{
//         const imageUrl = data.data.images.original.url;
//         console.log(imageUrl);

//         const imgElement = document.createElement('img');
//         imgElement.src = imageUrl;

//         document.body.appendChild(imgElement);
//     })
// con interfaces
myRequest
    .then((response) => response.json())
    .then( ({data}: ResponseGilphy) =>{
        const imageUrl = data.images.original.url;
        console.log(imageUrl);
        createImageInsideDom(imageUrl)
    })