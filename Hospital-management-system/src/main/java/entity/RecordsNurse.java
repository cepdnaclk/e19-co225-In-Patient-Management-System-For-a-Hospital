package entity;

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

public class RecordsNurse {
    @EmbeddedId
    private NurseUser Id;
    private Date date;
    private  Float temperature;
    private String pressure;
    private String others;

    @ManyToOne()
    @JoinColumn(
            name = "nurse_records_id",
            referencedColumnName = "nurseId"
    )private Nurse nurse_records;

    @ManyToOne()
    @JoinColumn(
            name = "user_records_id",
            referencedColumnName = "userId"
    )private User user_records_by_nurse;

}
