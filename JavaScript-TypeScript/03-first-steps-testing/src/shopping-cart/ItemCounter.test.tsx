import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";




describe("ItemCounter", () =>{

    test('should render with default values', () =>{

        const name= 'Test item';

        render(<ItemCounter name={name}/>)

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    })
    test('should render with custom quantity', () =>{

        const name= 'Test item';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity}/>)

        expect(screen.getByText(quantity)).toBeDefined();
    })
    test('should incrase count when +1 button is pressed', () =>{
        render(<ItemCounter name={'test item'} quantity={1}/>)

        const [, buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();
    })
    test('should decrase count when -1 button is pressed', () =>{
        render(<ItemCounter name={'test item'} quantity={2}/>)
        const [buttonSubstract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubstract);

        expect(screen.getByText('1')).toBeDefined();


    })
    test('should not decrase count when -1 button is pressed and quantity is 1 ', () =>{
        render(<ItemCounter name={'test item'} quantity={1}/>)
        const [buttonSubstract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubstract);

        expect(screen.getByText('1')).toBeDefined();

    });


    test('should change to red when count is 1', () =>{
        const name = 'Test item';
        const quentity = 1;
        render(<ItemCounter name={name} quantity={quentity}/>)

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');
    });

    test('should change to black when count is grater than 1', () =>{
        const name = 'Test item';
        const quentity = 2;
        render(<ItemCounter name={name} quantity={quentity}/>)

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black');
    });


}); 

