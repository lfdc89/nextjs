package sogei.architetture.nextjs.backend.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;

@Entity
@Table(name="ARRIVALS")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ArrivalEntity {

    @Id
    @Column(name="FLIGHT_NUM")
    private String flightNum;

    @Column(name="AIRPORT_PROV_SIG")
    private String airportProvSig;

    @Column(name="AIRPORT_PROV")
    private String airportProv;

    @Column(name="ARR_TIME")
    private Time arrTime;
}
