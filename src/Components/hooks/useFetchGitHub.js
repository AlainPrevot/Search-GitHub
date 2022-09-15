import { useEffect, useState } from "react"
import { getUser } from "../../helpers/getUser";

export const useFetchGitHub = (username) => {

    const [avatar, setAvatar] = useState([]);
     
    const getAvatar = async() => { //Creo una promesa para esperar el resultado de la api, sino me salta error
        const NewAvatar = await getUser(username);
        setAvatar(NewAvatar);
    }

    useEffect(() => {
      getAvatar();
    }, [ ]); //Al no pasarle valor al useEffect logramos que solo se ejecute al crear el componente

  return {
    avatar
  }
}
