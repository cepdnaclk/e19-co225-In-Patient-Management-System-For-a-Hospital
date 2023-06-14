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
public class Medicine {
    private Date date;
    private  String details;

    @Id
    @ManyToOne()
    @JoinColumn(
            name = "doctor_medicine_id",
            referencedColumnName = "doctorId"
    )private Doctor doctor;

    @Id
    @ManyToOne()
    @JoinColumn(
            name = "user_medicine_id",
            referencedColumnName = "userId"
    )private User user;





}
