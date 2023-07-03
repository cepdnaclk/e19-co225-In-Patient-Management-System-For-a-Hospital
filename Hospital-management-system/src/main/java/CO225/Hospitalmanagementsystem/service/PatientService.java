package CO225.Hospitalmanagementsystem.service;

import CO225.Hospitalmanagementsystem.entity.User;
import CO225.Hospitalmanagementsystem.model.UserInfoModel;
import CO225.Hospitalmanagementsystem.model.UserModel;
import CO225.Hospitalmanagementsystem.repository.PatientRepository;
import CO225.Hospitalmanagementsystem.repository.WardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class PatientService {

    @Autowired
    PatientRepository patientRepository;
    @Autowired
    WardRepository wardRepository;


    public UserModel addUser(UserModel userModel) throws Exception {
        User user = new User();
        user.setName(userModel.getName());
        user.setNic(userModel.getNic());
        user.setWard(wardRepository.getByWardId(userModel.getWardno()));
        user.setAllergics(userModel.getAllergics());
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        Date date = null;
        try {
            date = format.parse(userModel.getAdmiteDate());
            System.out.println(date);
        } catch (ParseException e) {
            e.printStackTrace();
            throw new Exception(e);

        }
        user.setAdmiteDate(date);
        user.setBirthDate(userModel.getBirthDate());
        patientRepository.save(user);
        return userModel;

    }


    public UserModel getPatientByNIC(String nic) {
        return patientRepository.finByNic(nic);
    }
}
