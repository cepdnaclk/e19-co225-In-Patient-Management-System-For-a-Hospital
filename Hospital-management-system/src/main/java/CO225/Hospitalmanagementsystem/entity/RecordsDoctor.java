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
public class RecordsDoctor {

    private Date date;
    private  Float temperature;
    private String pressure;
    private String others;

    @Id
    @ManyToOne()
    @JoinColumn(
            name = "doctor_records_id",
            referencedColumnName = "doctorId"
    )private Doctor doctor_records;

    @Id
    @ManyToOne()
    @JoinColumn(
            name = "user_records_id",
            referencedColumnName = "userId"
    )private User user_records_by_doctor;


}
