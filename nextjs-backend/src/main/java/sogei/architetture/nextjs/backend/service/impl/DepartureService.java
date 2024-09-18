package sogei.architetture.nextjs.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sogei.architetture.nextjs.backend.model.Departure;
import sogei.architetture.nextjs.backend.repository.DepartureRepository;
import sogei.architetture.nextjs.backend.service.IDepartureService;

import java.util.List;

import static sogei.architetture.nextjs.backend.util.MapperOperations.convertList;

@Service
public class DepartureService implements IDepartureService {

    @Autowired
    private DepartureRepository departureRepository;

    @Override
    public List<Departure> getAllDepartures() {
        return convertList(departureRepository.findAll(), Departure.class);
    }
}
