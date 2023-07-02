package CO225.Hospitalmanagementsystem.repository;

import CO225.Hospitalmanagementsystem.entity.User;
import CO225.Hospitalmanagementsystem.model.AdmitDateCount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;
import java.util.Map;

public interface PatientRepository extends JpaRepository<User, Integer> {



     @Query(
             value = "select COUNT(user_id) from user",
             nativeQuery = true
     )
     int getCount();


     @Query(
             value = "SELECT admite_date AS date, COUNT(*) AS count FROM user GROUP BY DATE(admite_date)",
             nativeQuery = true
     )
     List<Map<Date, Integer>> getAdmitDataCount();
}
