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

    private Date date;
    private String details;

    @Id
    @ManyToOne()
    @JoinColumn(
            name = "doctor_advice_id",
            referencedColumnName = "doctorId"
    )
    private Doctor doctor_advice;

    @Id
    @ManyToOne()
    @JoinColumn(
            name = "user_advice_id",
            referencedColumnName = "userId"
    )
    private User user_advice;

}
