package CO225.Hospitalmanagementsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserModel {
    private String birthDate; //dd/mm/year
    private String nic;
    private String name;
    private String admiteDate;
    private String allergics;
    private int wardno;
}
