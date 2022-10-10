import { render, screen } from "@testing-library/react";
import { CardUser } from "../../src/Components/CardUser";
import { useFetchGitHub } from "../../src/hooks/useFetchGitHub";

jest.mock('../../src/hooks/useFetchGitHub.js'); //Realizamos un mock del url

describe('Pruebas en CardUser', () => { 

    const user = 'alainprevot';
    
    test('Debe de mostrar la informacion cuando se carga mediante useFetchGitHub', () => { 

        const info = {
            avatar_url: 'https://localhost/alainprevot/image',
            name: 'alain',
            login: 'alainprevot',
            bio: 'bio de prueba',
            public_repos: 3,
            followers: 3,
            following: 3,
            location: 'CABA',
            twitter_username: 'AAA',
            html_url: 'https://localhost/alainprevot',
            company: 'BBB'
        }

        useFetchGitHub.mockReturnValue({
            avatar: info
        });

        render(<CardUser username={user}/>);

        //Me aseguro que los datos que le pase al mock sean dibujados en el componente

        expect(screen.getByRole('img')).toBeTruthy();

        expect(screen.getByText(login)).toBeTruthy();

        expect(screen.getByText(location)).toBeTruthy();

        expect(screen.getByText(public_repos)).toBeTruthy();
    });

});