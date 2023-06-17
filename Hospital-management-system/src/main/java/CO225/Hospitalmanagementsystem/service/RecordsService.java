package CO225.Hospitalmanagementsystem.service;

import CO225.Hospitalmanagementsystem.entity.Records;
import CO225.Hospitalmanagementsystem.entity.UserInfo;
import CO225.Hospitalmanagementsystem.repository.PatientRepository;
import CO225.Hospitalmanagementsystem.repository.RecordsRepository;
import CO225.Hospitalmanagementsystem.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class RecordsService {

    @Autowired
    RecordsRepository recordsRepository;
    @Autowired
    UserInfoRepository userInfoRepository;
    @Autowired
    PatientRepository patientRepository;

    public String addRecords(Records records){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object principal = authentication.getPrincipal();
      //  String name = ((UserDetails) principal).getUsername();
        UserInfo officer =  userInfoRepository.findByName(authentication.getName());
        records.setOfficier(officer);
        records.setDate(new Date());
        records.setPatient(patientRepository.getById(records.getPatientno()));
        recordsRepository.save(records);
        return "record added";
    }
}
