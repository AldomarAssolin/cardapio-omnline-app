/* eslint-disable react/prop-types */
import { Card, Button, CardFooter }from 'react-bootstrap';

function CardLanche(props){
    return(
        
        <Card style={{ width: '18rem', height: '26rem' }} className='mb-2 m-auto'>
            <Card.Img variant="top" src={props.image} style={{height: '10rem'}} />
            <Card.Body>
                <Card.Body className='d-flex align-items-center justify-content-between'>
                    <Card.Title>{props.nome}</Card.Title>
                </Card.Body>
                <Card.Text>
                    {props.descricao}
                </Card.Text>
            </Card.Body>
            <CardFooter className='text-center'>
                <Card.Subtitle className="text-success">{props.preco}</Card.Subtitle>
            </CardFooter>
            <CardFooter className='text-center'>
                <Button variant="success" >Adicionar ao Pedido</Button>
            </CardFooter>
        </Card>

    )
}

export default CardLanche;