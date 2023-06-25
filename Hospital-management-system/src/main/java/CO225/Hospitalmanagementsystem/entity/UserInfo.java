package CO225.Hospitalmanagementsystem.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(uniqueConstraints = {@UniqueConstraint(name = "UniqueUserName", columnNames = {"userName"})})
public class UserInfo {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_info_seq")
    @SequenceGenerator(name = "user_info_seq", sequenceName = "user_info_seq", allocationSize = 1)
    private long id;
    @Column(unique = true)
    private String userName;
    private String password;
    private String roles;
    private String email;
    private String birthDate; //format: dd/mm/year
    private String name;
    private Date startDate;
    private String nic;


    @ManyToOne()
    @JoinColumn(
            name = "ward_id",
            referencedColumnName = "wardId"
    )private Ward ward;

}
