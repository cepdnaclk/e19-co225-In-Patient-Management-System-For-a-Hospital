package entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long user_id;
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
}
