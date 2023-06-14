package CO225.Hospitalmanagementsystem.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
public class RecordsNurse {
    private Date date;
    private  Float temperature;
    private String pressure;
    private String others;

    @Id
    @ManyToOne()
    @JoinColumn(
            name = "nurse_records_id",
            referencedColumnName = "nurseId"
    )private Nurse nurse_records;

    @Id
    @ManyToOne()
    @JoinColumn(
            name = "user_records_id",
            referencedColumnName = "userId"
    )private User user_records_by_nurse;
}
