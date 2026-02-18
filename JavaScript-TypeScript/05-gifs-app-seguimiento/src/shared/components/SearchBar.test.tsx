import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import SearchBar from "./SearchBar";

describe('SearchBar', () =>{


    test('should render searchbar correctly', () =>{

        const {container} = render(<SearchBar onQuery={() => {}}/>)


        expect(container).toMatchSnapshot();
        expect(screen.getAllByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();


    });

    test('should call onQuery with the correct value after 700ms', async() =>{

        const onQuery = vi.fn();
        render(<SearchBar  onQuery={onQuery}/>)


        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: "test"}});


        await waitFor(() =>{
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        })

    });


    test('should the input has the correct placeholder value', () =>{

        const value = 'buscar gif'

        render(<SearchBar onQuery={() => {}} placeholder={value}/>);


        expect(screen.getByPlaceholderText(value)).toBeDefined();


    })


})