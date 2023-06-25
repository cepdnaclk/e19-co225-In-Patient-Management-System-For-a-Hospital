package CO225.Hospitalmanagementsystem.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Ward {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long wardId;
    private int size;
    private  String type;

    @OneToMany(mappedBy = "ward")
    private List<User> patients = new ArrayList<User>();

    @OneToMany(mappedBy = "ward")
    private List<UserInfo> staff = new ArrayList<>();

}
