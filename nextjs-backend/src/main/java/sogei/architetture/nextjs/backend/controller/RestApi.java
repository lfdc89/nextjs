package sogei.architetture.nextjs.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import sogei.architetture.nextjs.backend.service.impl.ArrivalService;
import sogei.architetture.nextjs.backend.service.impl.DepartureService;
import sogei.architetture.nextjs.backend.service.impl.ShopService;
import sogei.architetture.nextjs.backend.util.ForecastGenerator;

import java.util.Date;

@RestController
public class RestApi {

    @Autowired
    DepartureService departureService;

    @Autowired
    ArrivalService arrivalService;

    @Autowired
    ShopService shopService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/departures")
    public ResponseEntity getDepartures() {
        System.out.println(new Date().getTime() + " --> API /departures called...");
        try {
            return ResponseEntity.status(HttpStatus.OK).body(departureService.getAllDepartures());
        } catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getLocalizedMessage());
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/arrivals")
    public ResponseEntity getArrivals() {
        System.out.println(new Date().getTime() + " --> API /arrivals called...");
        try {
            return ResponseEntity.status(HttpStatus.OK).body(arrivalService.getAllArrivals());
        } catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getLocalizedMessage());
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/shops")
    public ResponseEntity getShops() {
        System.out.println(new Date().getTime() + " --> API /shops called...");
        try {
            return ResponseEntity.status(HttpStatus.OK).body(shopService.getAllShops());
        } catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getLocalizedMessage());
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/forecast")
    public ResponseEntity getForecast() {
        System.out.println(new Date().getTime() + " --> API /forecast called...");
        try {
            return ResponseEntity.status(HttpStatus.OK).body(ForecastGenerator.generateForecast());
        } catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getLocalizedMessage());
        }
    }

}
