package sogei.architetture.nextjs.backend.util;

import sogei.architetture.nextjs.backend.model.Forecast;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class ForecastGenerator {

    public static Forecast generateForecast() {
        String pattern = "HH:mm:ss";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        String date = simpleDateFormat.format(new Date());

        Random rand = new Random();
        Integer randInteger = rand.nextInt(9);
        switch (randInteger) {
            case 1: return new Forecast("SERENO", 30, date);
            case 2: return new Forecast("SOLEGGIATO", 34, date);
            case 3: return new Forecast("VELATURE", 28, date);
            case 4: return new Forecast("COPERTO", 27, date);
            case 5: return new Forecast("NUVOLOSO", 23, date);
            case 6: return new Forecast("PIOGGIA", 23, date);
            case 7: return new Forecast("NEVISCHIO", 10, date);
            case 8: return new Forecast("NEVE", 7, date);
            default: return new Forecast("GHIACCIO", 0, date);
        }
    }
}
