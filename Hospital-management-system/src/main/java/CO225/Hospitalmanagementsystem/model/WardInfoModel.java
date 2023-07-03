package CO225.Hospitalmanagementsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WardInfoModel {
    private long id;
    private String type;
    private int doctorCount;
    private int nurseCount;
    private int patientCount;
}
