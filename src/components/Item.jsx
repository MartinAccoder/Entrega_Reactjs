import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Item = ({ productos }) => {
    return (
        <Card className='justify-content-center align-items-center'>
            <Card.Img variant="top" src={productos.img} style={{width:'12rem', height:'12rem',}}/>
            <Card.Body>
                <Card.Title>{productos.name}</Card.Title>
                <Card.Text>
                    ${productos.price},00
                </Card.Text>
                <Link to={'/item/'+productos.id} className='btn btn-primary'>Ver más</Link>
            </Card.Body>
        </Card>)
}

export default Item;