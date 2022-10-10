import { render, screen } from "@testing-library/react";
import { InfoRepos } from "../../src/Components/InfoRepos";

describe('Pruebas en InfoRepos', () => { 
    
    test('Debe de hacer match con el snapshot', () => { 
     
        const {container} = render(<InfoRepos repos={8} followers={22} following={10}/>);
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar las propiedades pasadas', () => {

        render(<InfoRepos repos={8} followers={22} following={10}/>);
        expect(screen.getByText(8)).toBeTruthy();
        expect(screen.getByText(22)).toBeTruthy();
        expect(screen.getByText(10)).toBeTruthy();

    });

 });