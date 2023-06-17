package CO225.Hospitalmanagementsystem.repository;

import CO225.Hospitalmanagementsystem.entity.UserInfo;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserInfoRepository extends JpaRepository <UserInfo, Integer> {
    Optional<UserInfo> findByUserName(String userName);

    @Query(
            value = "select * from UserInfo where user_name = ?1",
            nativeQuery = true
    )
    UserInfo findName(String userName);
}
