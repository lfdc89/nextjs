package sogei.architetture.nextjs.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Entity
@Table(name="F1_DRIVERS")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DriverEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="NAME")
    private String name;

    @Column(name="SHORTNAME")
    private String shortname;

    @Column(name="CAR_NUMBER")
    private Integer carNumber;

    @Column(name="TEAM")
    private String team;
}
