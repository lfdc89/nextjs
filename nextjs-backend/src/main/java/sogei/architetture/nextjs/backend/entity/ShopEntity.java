package sogei.architetture.nextjs.backend.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;

@Entity
@Table(name="SHOPS")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShopEntity {

    @Id
    @Column(name="ID")
    private Integer id;

    @Column(name="SHOPNAME")
    private String shopName;

    @Column(name="SHOPDESCR")
    private String shopDescription;

}
