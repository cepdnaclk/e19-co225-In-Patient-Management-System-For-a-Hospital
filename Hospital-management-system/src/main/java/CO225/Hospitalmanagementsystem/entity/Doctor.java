package CO225.Hospitalmanagementsystem.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Doctor {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long doctorId;
    private String password;
    private Date birth_date;
    private String nic;
    private String name;

    @ManyToOne()
    @JoinColumn(
            name = "ward_id",
            referencedColumnName = "wardId"
    )private Ward ward;



}
