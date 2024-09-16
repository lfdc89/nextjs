import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ReservationForm({data}) {
    return (<div>
        <Card>
            <Card.Header as="h5">Prenota ora</Card.Header>
            <Card.Body>
                <Card.Title>Prenota la tua stanza</Card.Title>
                <Card.Text>
                Clicca sul pulsante sotto per verificare le disponibilità per i prossimi 15 giorni!
                {data}
                </Card.Text>
                <Button variant="primary">Verifica disponibilita</Button>
            </Card.Body>
        </Card>    
    </div>);
}

export async function getServerSideProps() {
    console.log("Calling /availabilities API...");
    
    const res = await fetch('http://localhost:8080/availabilities');
    const data = await res.json();

    return {
        props: {data}
    }
}