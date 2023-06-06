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
public class RecordsDoctor {
    @EmbeddedId
    private DoctorUser id;
    private Date date;
    private  Float temperature;
    private String pressure;
    private String others;

    @ManyToOne()
    @JoinColumn(
            name = "doctor_records_id",
            referencedColumnName = "doctorId"
    )private Doctor doctor_records;

    @ManyToOne()
    @JoinColumn(
            name = "user_records_id",
            referencedColumnName = "userId"
    )private User user_records_by_doctor;
}
