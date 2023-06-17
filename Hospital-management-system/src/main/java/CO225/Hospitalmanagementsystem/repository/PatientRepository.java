package CO225.Hospitalmanagementsystem.repository;

import CO225.Hospitalmanagementsystem.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<User, Integer> {

}
