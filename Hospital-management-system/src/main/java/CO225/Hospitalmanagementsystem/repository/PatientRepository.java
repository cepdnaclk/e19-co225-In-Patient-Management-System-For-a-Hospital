package CO225.Hospitalmanagementsystem.repository;

import CO225.Hospitalmanagementsystem.entity.User;
import CO225.Hospitalmanagementsystem.entity.UserInfo;
import CO225.Hospitalmanagementsystem.model.AdmitDateCount;
import CO225.Hospitalmanagementsystem.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface PatientRepository extends JpaRepository<User, Integer> {



     @Query(
             value = "select COUNT(user_id) from user",
             nativeQuery = true
     )
     int getCount();


     @Query(
             value = "SELECT admite_date AS x, COUNT(*) AS y FROM user GROUP BY DATE(admite_date)",
             nativeQuery = true
     )
     List<Map<Date, Integer>> getAdmitDataCount();

     @Query(
             value = "select COUNT(user_id) from user where ward_id =?1",
             nativeQuery = true
     )
     int getPatientCountByWardId(long wardId);

     @Query(
             value = "select * from user where user_id =?1",
             nativeQuery = true
     )
     User  findUserByNic(String name);
     @Query(
             value = "select * from user where nic = ?1",
             nativeQuery = true
     )
     User findByNic(String userName);

//     @Query(
//             value = "select * from user where nic =?1",
//             nativeQuery = true
//     )
//     UserModel finByNic(Integer nic);
}
