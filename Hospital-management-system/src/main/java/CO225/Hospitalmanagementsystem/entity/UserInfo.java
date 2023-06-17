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
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String userName;
    private String password;
    private String roles;

    private String birthDate; //format: dd/mm/year
    private String name;
    private Date startDate;
    private String nic;
    private int wardno;

    @ManyToOne()
    @JoinColumn(
            name = "ward_id",
            referencedColumnName = "wardId"
    )private Ward ward;

}
