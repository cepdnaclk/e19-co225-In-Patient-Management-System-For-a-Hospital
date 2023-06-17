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
public class Records {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Date date;
    private  Float temperature;
    private String pressure;
    private String others;

    @ManyToOne()
    @JoinColumn(
            name = "officier_id",
            referencedColumnName = "id"
    )private UserInfo officier;

    @ManyToOne()
    @JoinColumn(
            name = "patient_id",
            referencedColumnName = "userId"
    )private User patient;

}
