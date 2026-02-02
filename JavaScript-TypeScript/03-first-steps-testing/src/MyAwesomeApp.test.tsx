import { describe, expect, test } from "vitest";
import {render, screen} from '@testing-library/react'
import { AwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () =>{

    test('should render firstName and lastName', () =>{

       const {container} = render(<AwesomeApp />)
        // screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        
        expect(h1?.innerHTML).toBe("Francisco");
        expect(h3?.innerHTML).toBe("Avalos");

    })

    test('should render firstName and lastName whit SCREEN', () =>{

        render(<AwesomeApp />)
        screen.debug();
        // le agregamos un id al elemento del DOM
        const h1 = screen.getByTestId('first-name');

        expect(h1.innerHTML).toContain("Francisco")

    })

    test('should match snapshot', () =>{
        // nos sirve para hacer una fotografia del html 
        const  {container} = render(<AwesomeApp />)
        expect(container).toMatchSnapshot();
    })

});
