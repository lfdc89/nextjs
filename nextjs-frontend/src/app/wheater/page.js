'use client';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WheaterForecast from '@/components/WheaterForecast';

export default function Wheater() {
    const initialTimestamp = new Date();
    const finalTimestamp = new Date();

    const loadingTime = finalTimestamp.getTime() - initialTimestamp.getTime();
    return(

        <div>
        <header>
          <Header />
        </header>
  
        <main>
            <WheaterForecast/>
            <Footer loadingTime={loadingTime} />               
        </main>
        
      </div>
    );
}