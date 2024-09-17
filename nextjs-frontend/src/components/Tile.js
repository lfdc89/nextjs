import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Tile(props) {

    return(
        <div>
               <Card style={{ width: '18rem' }} md={{ span: 6, offset: 3 }}>
                  <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                    <Card.Text>
                      {props.text}
                    </Card.Text>
                    <Card.Link href={props.linkref}>{props.link}</Card.Link>
                  </Card.Body>
                </Card>
        </div>
    );
}