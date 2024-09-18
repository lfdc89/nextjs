import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

export default async function DeparturesPage() {

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`
  const res = await fetch('http://localhost:8080/departures', {cache: 'no-store' });
  const posts = await res.json();

  return(
      <div>
        <Container>
            <h3>PARTENZE</h3>
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
                      <td>{val.airportDestSig}</td>
                      <td>{val.airportDest}</td>
                      <td>{val.depTime}</td>
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