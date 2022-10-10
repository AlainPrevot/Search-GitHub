import { getUser } from "../../src/helpers/getUser"

describe('Pruebas en GetUser', () => { 
    test('Debe de retornar un objeto', async() => { 
        
        const user = await getUser('alainprevot'); //Creo mi sujeto de prueba


        expect(Object.keys(user).length).toBeGreaterThan(0); //Me aseguro de que el objeto tenga un tamaño mayor a 0, de esta forma me aseguro de que exista

        
        expect(user).toEqual({ //Compruebo que el objeto me entregue los valores que necesito, en este caso hago la prueba solo con 3 que son los esenciales para cada usuario, y me aseguro de que sean del tipo que necesito
            ...user, //Copio las demas propiedades ya que sino me saltan error, y como no las necesito me da igual los valores que tenga
            id: expect.any( Number ),
            login: expect.any( String ),
            html_url: expect.any( String ),
        })
     });
 }); 