import Badge from 'react-bootstrap/Badge'
import { HiMiniShoppingCart } from "react-icons/hi2";

const CartWidget = () => {
    return (
        <div>
            <span>
            <HiMiniShoppingCart size='2.5rem' color='white'/>
            </span>
            <Badge bg="info">9</Badge>
            </div>

    )
}

export default CartWidget;