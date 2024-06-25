import NavBarCss from './NavBarCss.module.css'
import Divider from '../../img/ico/Divider.png'
import { Link } from 'react-router-dom'

interface NavBarProp{
    linksArray: string[]
    header: string
}

const NavBar:React.FC<NavBarProp> = ({linksArray, header}) => {
    console.log(linksArray)
    return(<>
        <nav className={NavBarCss.nav}>    
            {linksArray.map((link, index)=>(
                <div key={index}>
                    <Link to={`/${link.toLocaleLowerCase()}`}>
                        <span className={NavBarCss.first}>{link}</span>
                    </Link>
                    <img src={Divider} alt="/" />
                </div>
            ))}    
        </nav>
        <div className={NavBarCss.heading}>  
            <h1 className={NavBarCss.heading__h1}>{header}</h1>
        </div>
    </>)
}

export default NavBar