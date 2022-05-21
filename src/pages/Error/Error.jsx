import { Link } from 'react-router-dom'
import './Error.css'
export default function ErrorPage(){
    return(
        <>
        <h1 className="error-title">Эррор</h1>
        <p className='error-text'>Сиз қидирган саҳифа мавжуд емас !</p>
        <Link to='/'  >Асосий саҳифага қайтиш</Link>
        </>
    )
}