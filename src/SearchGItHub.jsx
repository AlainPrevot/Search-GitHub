import { useState } from "react"
import { CardUser } from "./Components/CardUser"
import { SearchUser } from "./Components/SearchUser"
import './SearchGitHub.sass'


export const SearchGItHub = () => {

  const username = 'alainprevot'

  const [user, setUser] = useState('')
    
  const onAddUser = (NewUser) =>{
      setUser(NewUser);
  }

  return (
    <>
        {/* title */}
        {/* modo oscuro o claro */}

        <SearchUser //Mostramos el componente input en pantalla
            onNewUser={onAddUser} //Le mandamos al componente la funcion con la cual imprimiremos el resultado
        />

        {/* tarjeta */}
        <CardUser
            username={username}
        />
    </>
  )
}
