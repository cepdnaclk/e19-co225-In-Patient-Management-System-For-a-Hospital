package CO225.Hospitalmanagementsystem.repository;

import CO225.Hospitalmanagementsystem.entity.Ward;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface WardRepository extends JpaRepository <Ward, Integer> {

    @Query(
            value = "select * from Ward where ward_id = ?1",
            nativeQuery = true
    )
    Ward getByWardId(int wardId);
}
