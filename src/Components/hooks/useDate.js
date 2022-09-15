import { useEffect, useState } from "react";
import { getUser } from "../../helpers/getUser";


export const useDate = (username) =>{

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
 
    const getDay = async() => { //Creo una promesa para esperar el resultado de la api, sino me salta error
        const user = await getUser(username);

        setDay(user.created_at.slice(8,10));
        setMonth(monthNames[parseInt(user.created_at.slice(5,7))].substring(0,3)); 
        setYear(user.created_at.slice(0,4));
    }

    useEffect(() => {
      getDay();
    }, [ ]); //Al no pasarle valor al useEffect logramos que solo se ejecute al crear el componente


    return {
      year,
      month,
      day
    } 
  }