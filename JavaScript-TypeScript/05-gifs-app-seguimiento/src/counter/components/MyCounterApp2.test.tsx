import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MycounterApp } from "./MycounterApp";
// import { useCounter } from "../hooks/useCounter";



const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResentMock = vi.fn();

vi.mock('../hooks/useCounter', () =>({
    useCounter: () =>({
        counter: 40,
        handleAdd:handleAddMock,
        handleReset: handleResentMock,
        handleSubstract: handleSubstractMock
    })
}))


describe('MyCounterApp', () =>{

    test('should render the component', () =>{

        render( <MycounterApp />)

        screen.debug()


        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(`Counter: 40`)


        expect(screen.getByRole('button', { name: '+1' })).toBeDefined()
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined()
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined()
    })


    test('should call handleAdd if button is clicked', () =>{

        render( <MycounterApp />)

        const button = screen.getByRole('button', {name: '+1'});


        fireEvent.click(button);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleAddMock).toHaveBeenCalledTimes(1);
        expect(handleResentMock).not.toHaveBeenCalled();

    })


}) 