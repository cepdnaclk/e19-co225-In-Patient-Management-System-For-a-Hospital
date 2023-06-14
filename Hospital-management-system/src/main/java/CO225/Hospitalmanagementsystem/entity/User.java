package CO225.Hospitalmanagementsystem.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userId;
    private String password;
    private String birth_date;
    private String nic;
    private String name;
    private String medical_history;

    @ManyToOne()
    @JoinColumn(
            name = "ward_id",
            referencedColumnName = "wardId"
    )private Ward ward;

    @OneToMany(mappedBy = "user")
    private List<Medicine> medicines = new ArrayList<Medicine>();

    @OneToMany(mappedBy = "user_advice")
    private List<Advice> advices = new ArrayList<Advice>();

    @OneToMany(mappedBy = "user_records_by_doctor")
    private List<RecordsDoctor> records_by_doctor = new ArrayList<RecordsDoctor>();
}
