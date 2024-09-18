package sogei.architetture.nextjs.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Arrival {

    String flightNum;
    String airportProvSig;
    String airportProv;
    Time arrTime;
}
