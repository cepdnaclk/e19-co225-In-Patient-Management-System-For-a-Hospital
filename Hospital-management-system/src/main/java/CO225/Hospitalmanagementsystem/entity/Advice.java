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
public class Advice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Date date;
    private String details;


    @ManyToOne()
    @JoinColumn(
            name = "doctor_advice",
            referencedColumnName = "id"
    )
    private UserInfo doctor;


    @ManyToOne()
    @JoinColumn(
            name = "user_advice",
            referencedColumnName = "userId"
    )
    private User patient;

}
