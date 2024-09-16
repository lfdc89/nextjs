package sogei.architetture.nextjs.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import sogei.architetture.nextjs.backend.models.Availability;
import sogei.architetture.nextjs.backend.models.Forecast;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@RestController
public class RestApi {

    @GetMapping("/availabilities")
    public List<Availability> getAvailabilities() {
        System.out.print("API /availabilities called...");
        List<Availability> availabilities = new ArrayList<Availability>();
        Availability av1 = new Availability(new Date(2024,10,1), "Doppia", 150.0);
        availabilities.add(av1);
        return availabilities;
    }

    @GetMapping("/forecast")
    public Forecast getWheaterForecast() {
        System.out.print("API /forecast called...");
        return null;
    }
}
