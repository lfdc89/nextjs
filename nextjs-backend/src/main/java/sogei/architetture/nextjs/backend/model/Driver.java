package sogei.architetture.nextjs.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Driver {

    private String name;
    private String shortname;
    private Integer carNumber;
    private String team;

}
