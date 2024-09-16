import Alert from 'react-bootstrap/Alert';

function Footer({loadingTime}) {

    return (
        <div>
            <Alert variant='info'>Tempo di caricamento di questa pagina: {loadingTime}ms</Alert>
        </div> 
    );
}

export default Footer;