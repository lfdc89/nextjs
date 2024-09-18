package sogei.architetture.nextjs.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sogei.architetture.nextjs.backend.model.Shop;
import sogei.architetture.nextjs.backend.repository.ShopRepository;
import sogei.architetture.nextjs.backend.service.IShopService;

import java.util.List;

import static sogei.architetture.nextjs.backend.util.MapperOperations.convertList;

@Service
public class ShopService implements IShopService {

    @Autowired
    ShopRepository shopRepository;

    @Override
    public List<Shop> getAllShops() {
        return convertList(shopRepository.findAll(), Shop.class);
    }
}
