import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

export default function Tile(props) {

    return(
        <div>
            <Container>
                <Card>
                    <Image src={props.src} width={286} height={80} alt="Picture of the author" />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        <Button variant="primary" href={props.href}>{props.link}</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}