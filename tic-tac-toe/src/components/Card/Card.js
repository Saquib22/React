import { IconContext } from "react-icons";
import Icon  from "../Icon/Icon";
import './Card.css';
function Card({player}){
    let icon = <Icon />
    if(player == 'X'){
        return <Icon name= 'cross' />
    }
    else if(player == 'O'){
        return <Icon name= 'circle' />
    }
    return (
        <div className="card">
            {icon}
        </div>
    )
}
export default Card;