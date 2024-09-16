package sogei.architetture.nextjs.backend.models;

import java.sql.Date;

public class Availability {

    Date data;
    String tipo;
    Double prezzo;

    public Availability(Date data, String tipo, Double prezzo) {
        this.data = data;
        this.tipo = tipo;
        this.prezzo = prezzo;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(Double prezzo) {
        this.prezzo = prezzo;
    }
}
