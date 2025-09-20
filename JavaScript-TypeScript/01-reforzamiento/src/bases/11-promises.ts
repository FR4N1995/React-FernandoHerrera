const myPromise = new Promise (
    (resolve, reject) =>{

        setTimeout(() => {
            resolve(100)
            // reject('Mi amigo se perdio :(')
        }, 2000); //2 segundos

})

myPromise
        .then((myMony) =>{
            console.log(`Tengo mi dinero ${myMony}`);
        })
        .catch((reason) =>{
            console.warn(reason)
        })
        // este siempre se ejecuta sin importar la respuesta del resolve o del reject
        .finally(() =>{
            console.log('Pues a seguir con mi vida');
        })