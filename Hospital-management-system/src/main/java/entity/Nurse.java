package entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder

public class Nurse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long nurseId;
    private String password;
    private String name;
    private String birth_date;
    private String nic;


    @ManyToOne()
    @JoinColumn(
            name = "ward_id",
            referencedColumnName = "wardId"
    )private Ward ward;

}

