'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Tile from '@/components/Tile.js';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {

    var f1_title = "F1 2024";
    var f1_subtitle = "Dati sulla F1 del campionato 2024"
    var f1_text = "Esempio di NextJS page routing con dei dati sulla Formula 1 prelevati da un backend";
    var f1_link = "Vai alla sezione";
    var f1_linkref = "/f1";

  return (
    <div>
      <main>
      <Container>
        <Row>
          <h1><Badge bg="primary">SPORTS CENTER</Badge></h1>
        </Row>
        <Row>
            <Col>
                <Tile title={f1_title} subtitle={f1_subtitle} text={f1_text} link={f1_link} linkref={f1_linkref} />
            </Col>
        </Row>
      </Container>




      </main>
      
    </div>
  );
}
