import StyleModo from './sass/Modo.module.sass'

export const Modo = ({onMode}) => {
  
  return (
    <div className={StyleModo.content}>

        <h1>devfinder</h1>

        <div className={StyleModo.modo}>

            <input id="modo" type="checkbox" name='my-checkbox' onClick={() => onMode()}/>
            <label className={StyleModo.dark} htmlFor="modo">DARK</label>
            <label className={StyleModo.ligth} htmlFor="modo">LIGTH</label>
        </div>
    </div>
  )
}
