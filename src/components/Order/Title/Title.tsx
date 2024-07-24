import Slash from '../../../img/ico/slash__block.png'
import TitleModule from './Title.module.css'

interface TitleProp{
    title: string
    number: number
}

const Title: React.FC<TitleProp> = ({title, number}) => {
    return (
    <div className={TitleModule.name}>
        <span>{number}</span>
        <img src={Slash} alt="slash" />
        <span>{title}</span>
    </div>
    )
}

export default Title 