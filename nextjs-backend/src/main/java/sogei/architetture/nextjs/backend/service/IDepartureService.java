package sogei.architetture.nextjs.backend.service;

import sogei.architetture.nextjs.backend.model.Departure;

import java.util.List;

public interface IDepartureService {

    List<Departure> getAllDepartures();
}
