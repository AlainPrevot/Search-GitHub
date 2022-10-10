import { fireEvent, render, screen } from "@testing-library/react";
import { SearchUser } from "../../src/Components/SearchUser";

describe('Pruebas en SearchUser', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => { 

        render(<SearchUser onNewUser={() => {}}/>);
        
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, {target: {value: 'alainprevot'}});
        
        expect(input.value).toBe('alainprevot');
        
    });
    
    test('Debe de llamar al onNewUser si el input tiene un valor', () => { 
        
        const inputValue = 'alainprevot';
        
        const onNewUser = jest.fn();
        
        render(<SearchUser onNewUser={onNewUser}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});

        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewUser).toHaveBeenCalled();
        expect(onNewUser).toHaveBeenCalledTimes(1);
        expect(onNewUser).toHaveBeenCalledWith(inputValue); //Me aseguro que el valor de la funcion al momento de que es llamado sea el indicado
        
    });

    test('No debe de llamar el onNewUser si el input esta vacio', () => {

        const onNewUser = jest.fn();

        render(<SearchUser onNewUser={onNewUser}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewUser).toHaveBeenCalledTimes(0); //Me aseguro que la funcion no sea llamada

    });

});