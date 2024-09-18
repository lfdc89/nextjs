'use client';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

export default async function Shops({data}) {

    // This request should be cached until manually invalidated.
    // Similar to `getStaticProps`.
    // `force-cache` is the default and can be omitted.
    const res = await fetch('http://localhost:8080/shops', { cache: 'force-cache' });
    const shops = await res.json();

    return (
        <div>
            <Container>
                <h3>ELENCO NEGOZI</h3>
                {shops.map((val, key) => { 
                    return (
                    <Card key={key}>
                        <Card.Body>
                            <Card.Title>{val.shopName}</Card.Title>
                            <Card.Text>{val.shopDescription}</Card.Text>
                        </Card.Body>
                    </Card>
                    )
                })}
                <Alert variant='info'>Questa pagina e' generata con il SSG (<i>Static Site Generation</i>) ovvero i dati vengono invocati a build-time e poi non vengono più refreshati.</Alert>
            </Container>
        </div>
    );
};