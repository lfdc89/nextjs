package sogei.architetture.nextjs.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Shop {

    Integer id;
    String shopName;
    String shopDescription;
}
