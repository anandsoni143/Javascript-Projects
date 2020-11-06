 import React , {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'


const ThemeToggler = () => {
const [themeMode , setThemeMode] = useContext(ThemeContext)

    return (
        <div
        onClick={() => {
            setThemeMode(themeMode === 'light' ? 'dark' : 'light')
        }}>

<center><span>{themeMode === "light" ?  'Turn off': "lights on"}</span>
</center>
        </div>
    )

}



export default ThemeToggler;