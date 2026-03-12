// const myArray: (number | string)[] = [1,2,3,4,5,6,7];
const myArray: number[] = [1,2,3,4,5,6,7];

const myarray2 = [...myArray];

myarray2.push(7);

console.log({myArray, myarray2});