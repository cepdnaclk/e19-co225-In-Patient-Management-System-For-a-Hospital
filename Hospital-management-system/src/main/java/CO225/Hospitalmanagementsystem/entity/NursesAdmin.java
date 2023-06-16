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
public class NursesAdmin {
    private Date startDate;
    @Id
    @ManyToOne()
    @JoinColumn(
            name = "nurse_id",
            referencedColumnName = "nurseId"
    )private Nurse name1;

    @Id
    @OneToOne
    @JoinColumn(
            name = "admin_id",
            referencedColumnName = "adminId"
    )private Administration name2;
}
