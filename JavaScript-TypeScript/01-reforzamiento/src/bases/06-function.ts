function greet(name:string):string {
    return `Hola ${name}`
}

const greet2 = (name:string):string =>{
        return `Hola ${name}`
}

const message = greet('Goku');
const message2 = greet('Vegueta');

console.log({message, message2});

interface user {
    uid: string,
    userName: string
}

function getUser():user{
    return {
        uid: 'ABC-123',
        userName: 'El_papi23'
    }
}
// funcion con flecha
const getUser2 = ():user=>{
    return{
        uid: 'ABC-123',
        userName: 'El_papi24'
    }
}
// funcion simplificada
const getUser3 = ():user=>({
        uid: 'ABC-123',
        userName: 'El_papi24'
})


const user = getUser();
const user2 = getUser2();
const user3 = getUser3();
console.log(user, user2, user3);

const mynumbers: number[] = [1,2,3,4,5,6,7];
// palabra function
// mynumbers.forEach(function (value){
//     console.log({value});
// })
// con felcha =>
// mynumbers.forEach((value) => {
//     console.log(value);
// })
mynumbers.forEach(console.log);