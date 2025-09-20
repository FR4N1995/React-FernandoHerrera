const person = {
    name: 'Tony',
    age: 45,
    key: 'ironman'
}

const {key, name:nameironman, age} = person

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({nameironman, age, key})

// interface
interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string
}

const useContext = ({key, name, age,rank = 'sin rango'}:Hero) =>{
    return{
       keyName: key,
       user: {
        name,
        age
       },
       rank: rank
    }
};

const {rank, keyName, user:{name}} = useContext(person)

console.log(rank, keyName, name);