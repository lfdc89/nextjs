package sogei.architetture.nextjs.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sogei.architetture.nextjs.backend.model.Driver;
import sogei.architetture.nextjs.backend.repository.DriverRepository;
import sogei.architetture.nextjs.backend.service.IDriverService;

import java.util.List;

import static sogei.architetture.nextjs.backend.util.MapperOperations.convertList;

@Service
public class DriverService implements IDriverService {

    @Autowired
    private DriverRepository driverRepository;

    @Override
    public List<Driver> getAllDrivers() {
        return convertList(driverRepository.findAll(), Driver.class);
    }
}
