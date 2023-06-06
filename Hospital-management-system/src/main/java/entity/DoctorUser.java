package entity;

import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class DoctorUser implements Serializable {
    private Long doctorId;
    private  Long userId;
}
