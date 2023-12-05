import { CardBody, Card, CardTitle, CardText } from 'reactstrap';


function ItemFilmes({ img, titulo, sinopse }) {
    return (
        <div>
            <Card
                className="mb-3 mx-auto"
                color="light"
                style={{
                    width: '18rem',
                    //minHeight: '425px'
                }}
            >
                <img
                    alt={titulo}
                    src={img}
                />
                <CardBody>
                    <CardTitle tag="h3">
                        {titulo}
                    </CardTitle>
                    <CardText>
                        {sinopse}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemFilmes