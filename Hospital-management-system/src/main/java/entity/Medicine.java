package entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
    @EmbeddedId
    private DoctorUser id;
    private Date date;
    private  String details;

    @ManyToOne()
    @JoinColumn(
            name = "doctor_id",
            referencedColumnName = "doctorId"
    )private Doctor doctor;

    @ManyToOne()
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "userId"
    )private User user;





}
