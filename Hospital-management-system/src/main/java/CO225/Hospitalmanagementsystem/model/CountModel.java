package CO225.Hospitalmanagementsystem.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class CountModel {
    private int doctors;
    private int nurses;
    private int wards;
    private int clerks;
    private int patients;

}
