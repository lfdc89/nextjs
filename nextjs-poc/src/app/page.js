'use client'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeMain from '@/components/HomeMain'


export default function Home() {
  const initialTimestamp = new Date();
  const finalTimestamp = new Date();

  const loadingTime = finalTimestamp.getTime() - initialTimestamp.getTime();
  
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
          <HomeMain/>
          <Footer loadingTime={loadingTime} />
      </main>
      
    </div>
  );
}
