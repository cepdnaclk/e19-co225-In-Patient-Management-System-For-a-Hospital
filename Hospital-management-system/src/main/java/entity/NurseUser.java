package entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class NurseUser implements Serializable {
    @Column(name = "nurse_records_id")
    private long nurseId;
    @Column(name = "user_records_id")
    private long userId;

}
