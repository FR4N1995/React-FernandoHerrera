const ironman ={
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
};

// copia arreglo hasta el primer nivel es decir no alcanza hasta la propiedad address
// const spiderman = {...ironman};
// copia la estructura ta cual del arreglo
const spiderman = structuredClone(ironman);

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;
spiderman.address.city = 'Moroleon'


console.log(ironman, spiderman);