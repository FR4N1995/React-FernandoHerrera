import {describe, expect, test} from 'vitest';
import { add, divide, multiply, substract } from './math.helper';

describe('add', () =>{
    
    test('should add two positives numbers', () =>{
    
    
        // ! 1.- srrsnge ( es la preparacion)
        const a = 1 ;
        const b = 2;
    
        // ! 2.- Act (aplicar estimulos)
        const result = add(a, b);
        // console.log({result});
    
        // ! 3.- assert (la insercion)
        expect(result).toBe(a + b);
    });
});

describe('substract', () =>{
    test('should substraxr two positives numbers' , ()=>{
           // ! 1.- srrsnge ( es la preparacion)
        const a = 2 ;
        const b = 4;
    
        // ! 2.- Act (aplicar estimulos)
        const result = substract(a, b);
        // console.log({result});
    
        // ! 3.- assert (la insercion)
        expect(result).toBe(a - b);
    })
});

describe('multiply', () =>{
    test('should multiplay two positives numbers' , ()=>{
           // ! 1.- srrsnge ( es la preparacion)
        const a = 2 ;
        const b = 4;
    
        // ! 2.- Act (aplicar estimulos)
        const result = multiply(a, b);
        // console.log({result});
    
        // ! 3.- assert (la insercion)
        expect(result).toBe(a * b);
    })

});

describe('divide', () =>{
    test('should divide two positives numbers' , ()=>{
           // ! 1.- srrsnge ( es la preparacion)
        const a = 2 ;
        const b = 4;
    
        // ! 2.- Act (aplicar estimulos)
        const result = divide(a, b);
        // console.log({result});
    
        // ! 3.- assert (la insercion)
        expect(result).toBe(a / b);
    })

});

