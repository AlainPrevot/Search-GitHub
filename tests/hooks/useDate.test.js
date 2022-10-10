import { renderHook, waitFor } from "@testing-library/react";
import { useDate } from "../../src/hooks/useDate";

describe('Pruebas en el useDate', () => { 
    
    test('Debe de retornar la fecha', async() => { 
        
        const {result} = renderHook(() => useDate('alainprevot')); //Creo mi sujeto de prueba

        await waitFor( //Espero a que se realice la llamada a la api
            () => {
                expect(parseInt(result.current.day)).toEqual(expect.any(Number)); //Me aseguro que me devuelve el dia
                expect(result.current.month).toEqual(expect.any(String)); //Me aseguro que me devuelve el mes
                expect(parseInt(result.current.year)).toEqual(expect.any(Number)); //Me aseguro que me devuelve el año
            }
        );
     });
 }); 