import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert';

export default async function Forecast() {

    // This request should be cached with a lifetime of 10 seconds.
    // Similar to `getStaticProps` with the `revalidate` option.
    const revalidatedData = await fetch(`http://localhost:8080/forecast`, {next: { revalidate: 10 },})
    const forecast = await revalidatedData.json();
    return(
        <Container>
            <h3>PREVISIONI METEO</h3>

            <Alert variant='success'>
            <b>{forecast.condizioni}</b><br/>
            <i>{forecast.temperatura}°</i>
            </Alert>
            <br/>
            <br/>
            <p>Ultimo aggiornamento: {forecast.ultimoAggiornamento}</p>
            <Alert variant='info'>Questa pagina e' generata con l'ISR (<i>Incremental Static Regeneration</i>) ovvero i dati vengono pre-caricati a build-time e rimangono validi per 10 secondi, dopodiche viene interrogato nuovamente il server.</Alert>
        </Container>
    )
};