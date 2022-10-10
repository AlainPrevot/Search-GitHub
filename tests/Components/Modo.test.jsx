import { fireEvent, render, screen } from "@testing-library/react";
import { Modo } from "../../src/Components/Modo";

describe('Pruebas en Modo', () => { 

    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render(<Modo onMode={() => {}}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de pulsarse el input 2 veces', () => { 
        
        const handleClick = jest.fn();
        
        render(<Modo onMode={handleClick}/>);

        const input = screen.getByRole('checkbox');
        
        fireEvent.click(input);

        fireEvent.click(input);

        expect(handleClick).toHaveBeenCalledTimes(2); //Compruebo que el input haya sido pulsado 2 veces
        
    });
    
    test('El valor del checkbox debe cambiar al ser pulsado', () => { 
        
        render(<Modo onMode={() => {}}/>);
    
        const input = screen.getByRole('checkbox');
        
        fireEvent.click(input);
    
        expect(input.checked).toBe(true);
        
        fireEvent.click(input);
        
        expect(input.checked).toBe(false);
    
    });
});