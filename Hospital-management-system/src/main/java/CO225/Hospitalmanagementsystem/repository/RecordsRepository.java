package CO225.Hospitalmanagementsystem.repository;

import CO225.Hospitalmanagementsystem.entity.Records;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecordsRepository extends JpaRepository <Records, Integer> {
}
