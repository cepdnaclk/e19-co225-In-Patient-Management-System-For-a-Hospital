package CO225.Hospitalmanagementsystem.repository;

import CO225.Hospitalmanagementsystem.entity.Ward;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface  WardRepository extends JpaRepository <Ward, Long> {

    @Query(
            value = "select * from Ward where ward_id = ?1",
            nativeQuery = true
    )
    Ward getByWardId(long wardId);

    @Query(
            value = "select COUNT(*) from ward",
            nativeQuery = true
    )
     int getCount();



}
