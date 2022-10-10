import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGitHub } from "../../src/hooks/useFetchGitHub";

describe('Pruebas en el useFetchGitHub', () => { 
    
    test('Debe de retornar un objeto y el id', async() => { 
        
        const {result} = renderHook(() => useFetchGitHub('alainprevot')); //Creo mi sujeto de prueba

        await waitFor( //Espero a que se realice la llamada a la api
            () => {
                expect(Object.keys(result.current.avatar).length).toBeGreaterThan(0); //Controlo que el objeto no este vacio
                expect(result.current.avatar.id).toEqual(expect.any(Number)); //Me aseguro que me devuelve al menos una de las propiedades que necesito
            }
        )
     });
 }); 