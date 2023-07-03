package CO225.Hospitalmanagementsystem.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
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

    private String birthDate; //dd/mm/year
    private String nic;
    private String name;
    private String medicalHistory;

    private boolean isDischarged;
    private Date admiteDate;
    private String allergics;

    @ManyToOne()
    @JoinColumn(
            name = "ward_id",
            referencedColumnName = "wardId"
    )@JsonIgnore
    private Ward ward;

//    @OneToMany(mappedBy = "patient")
//    private List<Medicine> medicines = new ArrayList<Medicine>();
//
//    @OneToMany(mappedBy = "patient")
//    private List<Advice> advices = new ArrayList<Advice>();
//
//    @OneToMany(mappedBy = "patient")
//    private List<Records> records = new ArrayList<Records>();
}
