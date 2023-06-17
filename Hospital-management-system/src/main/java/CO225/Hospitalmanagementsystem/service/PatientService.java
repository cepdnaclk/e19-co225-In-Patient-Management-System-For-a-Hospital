package CO225.Hospitalmanagementsystem.service;

import CO225.Hospitalmanagementsystem.entity.User;
import CO225.Hospitalmanagementsystem.repository.PatientRepository;
import CO225.Hospitalmanagementsystem.repository.WardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PatientService {

    @Autowired
    PatientRepository patientRepository;
    @Autowired
    WardRepository wardRepository;

    public String addPatient(User user){
        user.setDischarged(false);
        user.setAdmiteDate(new Date());
        user.setWard(wardRepository.getByWardId(user.getWardno()));
        patientRepository.save(user);
        return "patient added";
    }
}
