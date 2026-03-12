const useSatet = (value:string) =>{
    return [
        value,
        (dbz:string) =>{
            console.log(dbz)
        }
    ] as const
}

const [name, calback] = useSatet('Goku')
console.log(name);
calback('vegeta');