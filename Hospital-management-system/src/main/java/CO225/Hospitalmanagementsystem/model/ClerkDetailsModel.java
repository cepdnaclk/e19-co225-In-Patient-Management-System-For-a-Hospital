package CO225.Hospitalmanagementsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClerkDetailsModel {
    private long id;
    private String name;
    private String userName;
    private  String password;
    private String email;
    private String roles;
    private String nic;
    private String birthDate;
}
