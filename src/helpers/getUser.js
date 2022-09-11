
export const getUser = async(username) => { //creamos una funcion para exportar la informacion obtenida de la api

    const url = `https://api.github.com/users/${username}`; //el username es un atributo porque va a ir cambiando
    const resp = await fetch(url);
    const data = await resp.json(); //convertimos la respuesta de la api en datos que puedo manipular

  return data //Exportamos la constante
}
