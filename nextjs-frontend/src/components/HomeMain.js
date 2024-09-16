import YouTube from "react-youtube";
import Footer from '../components/Footer';
import Link from 'next/link';

function HomeMain({links}) {

    const initialTimestamp = new Date();
    const finalTimestamp = new Date();

    const loadingTime = finalTimestamp.getTime() - initialTimestamp.getTime();
    
    return (
        <div>
            <h1>La nostra struttura</h1>
            <YouTube videoId="mJVuZiK9a6I"/>
        </div>
    );
}

export async function getYoutubeLinks() {
    
}

export default HomeMain;