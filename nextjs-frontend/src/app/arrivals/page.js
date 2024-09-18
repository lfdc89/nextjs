import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

export default async function ArrivalsPage() {

    // This request should be refetched on every request.
    // Similar to `getServerSideProps`
    const res = await fetch('http://localhost:8080/arrivals', {cache: 'no-store'});
    const posts = await res.json();

    return(
      <div>
        <Container>
          <h3>ARRIVI</h3>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>VOLO</th>
                <th>AIR</th>
                <th>AEREOPORTO</th>
                <th>ORARIO</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.flightNum}</td>
                    <td>{val.airportProvSig}</td>
                    <td>{val.airportProv}</td>
                    <td>{val.arrTime}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <Alert variant='info'>Questa pagina e' generata con il SSR (<i>Server Side Rendering</i>) ovvero ad ogni chiamata viene interrogato il server per avere nuovi dati.</Alert>
        </Container>
      </div>
    );
}