import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Item = ({ productos }) => {
    return (
        <Link to={'/item/' + productos.id} className='text-decoration-none text-reset'>
            <Card style={{ width: '18rem', height: '26rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '15px' }}>
                {/* imagen completa visible: contenida y centrada dentro de un bloque fijo */}
                <div style={{ width: '100%', height: '12rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.5rem' }}>
                    <Card.Img variant="top" src={productos.img} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                </div>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Card.Title>{productos.name}</Card.Title>
                        <Card.Text>
                            ${productos.price},00
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Item;