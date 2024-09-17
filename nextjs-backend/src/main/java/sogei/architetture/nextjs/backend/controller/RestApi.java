package sogei.architetture.nextjs.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import sogei.architetture.nextjs.backend.service.impl.DriverService;

@RestController
public class RestApi {

    @Autowired
    DriverService driverService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/drivers")
    public ResponseEntity getDrivers() {
        System.out.print("API /drivers called...");
        try {
            return ResponseEntity.status(HttpStatus.OK).body(driverService.getAllDrivers());
        } catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getLocalizedMessage());
        }
    }

}
