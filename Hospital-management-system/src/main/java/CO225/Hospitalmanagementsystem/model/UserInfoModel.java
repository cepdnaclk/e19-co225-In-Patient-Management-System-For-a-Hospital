package CO225.Hospitalmanagementsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoModel {
    private long id;
    private String name;
    private String userName;
    private  String password;
    private String email;
    private String roles;
    private String nic;
    private long wardNo;
    private String birthDate;


}
