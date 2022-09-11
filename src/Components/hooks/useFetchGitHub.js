import { useEffect, useState } from "react"
import { getUser } from "../../helpers/getUser";

export const useFetchGitHub = (username) => {

    const [avatar, setAvatar] = useState([]);
    
    const getAvatar = async() => { //Esto es necesario?
        const NewAvatar = await getUser(username);
        setAvatar(NewAvatar);
    }

    useEffect(() => {
      getAvatar();
    }, [ ]);

  return {
    avatar
  }
}
