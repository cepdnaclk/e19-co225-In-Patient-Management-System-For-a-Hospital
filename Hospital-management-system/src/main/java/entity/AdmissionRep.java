package entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class AdmissionRep {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long admissionRepId;
    private String password;
    private String birth_date;
    private String nic;
    private String name;
}
