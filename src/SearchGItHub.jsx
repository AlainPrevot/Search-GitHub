import { useState } from "react"
import { CardUser, Modo, SearchUser } from "./Components"
import './SearchGitHub.sass'


export const SearchGItHub = () => {

  const [user, setUser] = useState(['alainprevot'])
    
  const onAddUser = (NewUser) =>{
    setUser([NewUser]);
  }

  const [theme, setTheme] = useState("dark")

  const mode = () =>{
    setTheme(theme == "dark" ? "light" : "dark")
  }
  return (
    <section className="section" data-theme={theme}>
      <div>
          <Modo
            onMode={mode}
          /> 

          <SearchUser //Mostramos el componente input en pantalla
              onNewUser={onAddUser} //Le mandamos al componente la funcion con la cual imprimiremos el resultado
          />

          {
            user.map((users) => ( //Hacemos que se redibuje el componente cada vez que modificamos el array
              <CardUser 
                key={users} //Es obligatorio colocarle una clave siempre que usamos map
                username={users}
              />
            ))
          }
      </div>
    </section>
  )
}
