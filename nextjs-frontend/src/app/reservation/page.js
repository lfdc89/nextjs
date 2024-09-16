'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';

function Reservation() {

    const initialTimestamp = new Date();
    const finalTimestamp = new Date();

    const loadingTime = finalTimestamp.getTime() - initialTimestamp.getTime();
    return(

        <div>
        <header>
          <Header />
        </header>
  
        <main>
          <ReservationForm />
          <Footer loadingTime={loadingTime} />               
        </main>
        
      </div>
    );
}

export default Reservation;