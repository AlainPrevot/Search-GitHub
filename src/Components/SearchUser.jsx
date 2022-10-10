import { useState } from "react"
import { IconLupa } from "../Icons";
import StyleSearchUser from "./sass/SearchUser.module.sass";
import PropTypes from 'prop-types'

export const SearchUser = ({onNewUser}) => {

    const [inputValue, setInputValue] = useState(''); //Creo un hook

    const onInputChange =  e => { {/* Esta funcion envia los datos al input cada vez que escribo */}
        setInputValue(e.target.value); //Imprimo lo qu escribo en el input
    };

    const onSubmit = e => { //Esta funcion se ejecuta cada vez que presionamos enter
        e.preventDefault(); //Hacemos que no se recargue la pagina
        if(inputValue.trim().length <= 1) return //Controlamos que el input no este vacio y eliminamos los espacios al principio y al final 

        onNewUser(inputValue.trim()); //Enviamos el resultado fuera del componente
        setInputValue(''); //Limpiamos el componente
    };


  return (
    <form className={StyleSearchUser.form} onSubmit={onSubmit}  aria-label='form'> {/* La funcion OnSubmit hace que no se recargue la pagina cada vez que buscamos un valor */}

        <IconLupa className={StyleSearchUser.form__lupa}/>

        <input 
            className={StyleSearchUser.input}
            type="text" 
            placeholder="Search GitHub username"
            value={inputValue}
            onChange={onInputChange}
        />
        
        <button className={StyleSearchUser.button} onSubmit={onSubmit}>Search</button>
    </form>
  )
};

SearchUser.propTypes = {
    onNewUser: PropTypes.func.isRequired,
}
