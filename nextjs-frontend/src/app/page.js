'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Tile from '@/components/Tile.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import departureImg from '../../public/images/plane_departure_grey.svg';
import arrivalsImg from '../../public/images/plane_landing_grey.svg';
import shopImg from '../../public/images/shop.svg';
import forecastImg from '../../public/images/forecast.svg';

export default function Home() {

  return (
    <div>
      <main>
        <Container>
          <Row md={4}>
              <Col>
                  <Tile src={departureImg} title="Partenze" text="Monitora i voli in partenza" href="/departures" link="Vai alle partenze" />
              </Col>
              <Col>
                  <Tile src={arrivalsImg} title="Arrivi" text="Monitora i voli in arrivo" href="/arrivals" link="Vai agli arrivi" />
              </Col>
              <Col>
                  <Tile src={shopImg} title="Negozi" text="Esplora tutti i negozi disponibili" href="/shops" link="Visualizza i negozi" />
              </Col>
              <Col>
                  <Tile src={forecastImg} title="Previsioni" text="Consulta il meteo" href="/forecast" link="Visualizza il meteo" />
              </Col>
          </Row>
        </Container>
      </main>  
    </div>
  );
}
