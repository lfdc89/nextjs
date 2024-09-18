package sogei.architetture.nextjs.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sogei.architetture.nextjs.backend.model.Arrival;
import sogei.architetture.nextjs.backend.repository.ArrivalRepository;
import sogei.architetture.nextjs.backend.service.IArrivalService;

import java.util.List;

import static sogei.architetture.nextjs.backend.util.MapperOperations.convertList;

@Service
public class ArrivalService implements IArrivalService {

    @Autowired
    private ArrivalRepository arrivalRepository;

    @Override
    public List<Arrival> getAllArrivals() {
        return convertList(arrivalRepository.findAll(), Arrival.class);
    }
}
