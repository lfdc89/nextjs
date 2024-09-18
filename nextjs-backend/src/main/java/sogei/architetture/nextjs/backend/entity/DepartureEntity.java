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
@Table(name="DEPARTURES")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DepartureEntity {

    @Id
    @Column(name="FLIGHT_NUM")
    private String flightNum;

    @Column(name="AIRPORT_DEST_SIG")
    private String airportDestSig;

    @Column(name="AIRPORT_DEST")
    private String airportDest;

    @Column(name="DEP_TIME")
    private Time depTime;
}
