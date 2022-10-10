import { render, screen } from "@testing-library/react";
import { InfoUser } from "../../src/Components/InfoUser";

describe('Pruebas en InfoUser', () => { 

    const user = 'alainprevot';
    const name = 'Alain';
    const username = 'prueba';
    const bio = 'BIO';

    test('debe hacer match con el snapshot', () => { 
        const {container} = render(<InfoUser user={user} name={name} username={username} bio={bio}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar las propiedades pasadas', () => { 
        
        render(<InfoUser user={user} name={name} username={username} bio={bio}/>);

        expect(screen.getByText(name)).toBeTruthy();
        expect(screen.getByText(username)).toBeTruthy();
        expect(screen.getByText(bio)).toBeTruthy();

    });

});