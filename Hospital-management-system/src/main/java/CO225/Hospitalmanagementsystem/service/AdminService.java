package CO225.Hospitalmanagementsystem.service;

import CO225.Hospitalmanagementsystem.entity.UserInfo;
import CO225.Hospitalmanagementsystem.entity.Ward;
import CO225.Hospitalmanagementsystem.model.*;
import CO225.Hospitalmanagementsystem.repository.PatientRepository;
import CO225.Hospitalmanagementsystem.repository.UserInfoRepository;
import CO225.Hospitalmanagementsystem.repository.WardRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class AdminService {

    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private WardRepository wardRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserInfoModel addUser(UserInfoModel userInfoModel) {
        UserInfo userInfo = new UserInfo();
        userInfo.setUserName(userInfoModel.getUserName());
        userInfo.setNic(userInfoModel.getNic());
        userInfo.setName(userInfoModel.getName());
        userInfo.setBirthDate(userInfoModel.getBirthDate());
        userInfo.setEmail(userInfoModel.getEmail());
        userInfo.setPassword(passwordEncoder.encode(userInfoModel.getPassword()));
        userInfo.setRoles(userInfoModel.getRoles());
        long wardNo = userInfoModel.getWardNo();
        userInfo.setStartDate(new Date());
        Ward ward = wardRepository.getByWardId(wardNo);
        userInfo.setWard(ward);
        repository.save(userInfo);
        return userInfoModel;
    }

    public WardModel addWard(WardModel wardModel) {
        Ward ward = new Ward();
        ward.setSize(wardModel.getSize());
        ward.setType(wardModel.getType());
        wardRepository.save(ward);
        return wardModel;
    }


    public List<UserInfoModel> getDoctors() {
        List<UserInfo> doctorEntities = repository.findDoctors();
        List<UserInfoModel> doctors = doctorEntities
                .stream()
                .map(doc -> new UserInfoModel(
                        doc.getId(),
                        doc.getName(),
                        doc.getUserName(),
                        doc.getPassword(),
                        doc.getEmail(),
                        doc.getRoles(),
                        doc.getNic(),
                        doc.getWard().getWardId(),
                        doc.getBirthDate()

                )).collect(Collectors.toList());
        return doctors;


    }

    public List<UserInfoModel> getNurses() {
        List<UserInfo> nurseEntities = repository.findNurses();
        List<UserInfoModel> nurses = nurseEntities
                .stream()
                .map(doc -> new UserInfoModel(
                        doc.getId(),
                        doc.getName(),
                        doc.getUserName(),
                        doc.getPassword(),
                        doc.getEmail(),
                        doc.getRoles(),
                        doc.getNic(),
                        doc.getWard().getWardId(),
                        doc.getBirthDate()
                )).collect(Collectors.toList());
        return nurses;
    }

    public CountModel getStaffCount() {
        int doctors = repository.getDoctorCount();
        int nurses = repository.getNurseCount();
        int clerks = repository.getClerkCount();
        int patients = patientRepository.getCount();
        int wards = wardRepository.getCount();
        CountModel countModel = new CountModel();
        countModel.setClerks(clerks);
        countModel.setNurses(nurses);
        countModel.setDoctors(doctors);
        countModel.setWards(wards);
        countModel.setPatients(patients);
        return countModel;
    }

    public List<Map<Date, Integer>>  getAdmitDateCount() {
        List<Map<Date, Integer>> mapCount = patientRepository.getAdmitDataCount();
        List<AdmitDateCount> admitDateCounts = new ArrayList<>();
//        for (Map.Entry<Date, Integer> entry : mapCount.entrySet()) {
//            Date date = entry.getKey();
//            int count = entry.getValue();
//
//            AdmitDateCount admitDateCount = new AdmitDateCount(date, count);
//            admitDateCounts.add(admitDateCount);
//        }
//        for (Map<Date, Integer> map : mapCount) {
//            for (Map.Entry<Date, Integer> entry : map.entrySet()) {
////                String pattern = "yyyy-MM-dd HH:mm:ss";
////                SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
////                Date date = dateFormat.parse(entry.getKey());
//                Date date = new Date();
//                int count = entry.getValue();
//                admitDateCounts.add(new AdmitDateCount(date, count));
//            }
//        }

        return mapCount;
    }

    public List<ClerkDetailsModel> getClerks() {
        List<UserInfo> clerkEntities = repository.findClerks();
        List<ClerkDetailsModel> clerks = clerkEntities
                .stream()
                .map(doc -> new ClerkDetailsModel(
                        doc.getId(),
                        doc.getName(),
                        doc.getUserName(),
                        doc.getPassword(),
                        doc.getEmail(),
                        doc.getRoles(),
                        doc.getNic(),
                        doc.getBirthDate()
                )).collect(Collectors.toList());
        return clerks;
    }

    public List<WardInfoModel> getWardInfo() {
        List<Ward> wardEntities = wardRepository.findAll();
        List<WardInfoModel> wards = wardEntities
                .stream()
                .map(ward -> new WardInfoModel(
                        ward.getWardId(),
                        ward.getType(),
                        repository.getDocCountByWardId(ward.getWardId()),
                        repository.getNurseCountByWardId(ward.getWardId()),
                        patientRepository.getPatientCountByWardId(ward.getWardId())
                )).collect(Collectors.toList());
        return wards;


    }
}
