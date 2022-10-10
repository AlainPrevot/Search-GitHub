import { render, screen } from "@testing-library/react";
import { InfoContact } from "../../src/Components/InfoContact";

describe('Pruebas en el InfoContact', () => { 

    const location = 'CABA'
    const twitter = 'Jaime'
    const url = 'https://jaime.com/'
    const company = 'Facebook'

    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render(<InfoContact location={location} twitter={twitter} url={url} company={company}/>);
        expect(container).toMatchSnapshot();
     });

    test('Debe mostrar los datos en el componente', () => { 
        render(<InfoContact location={location} twitter={twitter} url={url} company={company}/>)

        // screen.debug()

        const {href} = screen.getByRole('link')//Extraido el href del link

        //Compruebo que los textos se dibujen dentro del componente
        expect(screen.getByText('CABA')).toBeTruthy();
        expect(screen.getByText('Jaime')).toBeTruthy();
        expect(href).toBe(url);
        expect(screen.getByText('Facebook')).toBeTruthy();
     });
 });