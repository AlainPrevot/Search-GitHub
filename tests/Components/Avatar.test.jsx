import { render, screen } from "@testing-library/react";
import { Avatar } from "../../src/Components/Avatar";

describe('Pruebas en el Avatar', () => { 
    
    const url = 'https://avatar.com/'

    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render(<Avatar avatar_url={url}/>);
        expect(container).toMatchSnapshot();
     });

    test('debe mostrar la imagen con el URL indicado', () => { 
        
        render(<Avatar avatar_url={url}/>);

        // screen.debug();

        const {src} = screen.getByRole('img');

        //Compruebo que el url sea el que le mando
        expect(src).toBe(url);
     });
 });