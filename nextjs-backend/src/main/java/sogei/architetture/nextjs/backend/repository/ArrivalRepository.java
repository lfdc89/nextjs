package sogei.architetture.nextjs.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sogei.architetture.nextjs.backend.entity.ArrivalEntity;

@Repository
public interface ArrivalRepository extends JpaRepository<ArrivalEntity, Long> {

}
