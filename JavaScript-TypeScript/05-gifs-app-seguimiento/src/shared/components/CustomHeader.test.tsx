import { describe, expect, test } from "vitest";
import CustomHeader from "./CustomHeader";
import { render, screen } from "@testing-library/react";


describe('CustomHeader', () =>{

    const title = 'test title';

    test('should render the title correctly', () =>{
        render(<CustomHeader title={title}/>)

        expect(screen.getByText(title)).toBeDefined();

        // screen.debug();

    })

    test('should render the description when provied', () =>{
        const description = 'test descripcion'
         render(<CustomHeader title={title} description={description}/>)
         expect(screen.getByText(description)).toBeDefined();
         expect(screen.getByRole('paragraph').innerHTML).toBe(description);

    });

    test('should not render description when not provided', () =>{

        const {container} = render(<CustomHeader title={title}/>);


        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');

        // console.log(h1?.innerHTML);
        expect(h1?.innerHTML).toBe(title);


        const p = divElement?.querySelector('p');
        expect(p).toBeNull();
        // console.log(p?.innerHTML)


    })


})