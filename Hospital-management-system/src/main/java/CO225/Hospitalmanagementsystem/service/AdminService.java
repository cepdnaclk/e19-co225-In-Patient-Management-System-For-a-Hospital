package CO225.Hospitalmanagementsystem.service;

import CO225.Hospitalmanagementsystem.entity.UserInfo;
import CO225.Hospitalmanagementsystem.entity.Ward;
import CO225.Hospitalmanagementsystem.model.UserInfoModel;
import CO225.Hospitalmanagementsystem.model.WardModel;
import CO225.Hospitalmanagementsystem.repository.UserInfoRepository;
import CO225.Hospitalmanagementsystem.repository.WardRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class AdminService {

    @Autowired
    private UserInfoRepository repository;

    @Autowired
    private WardRepository wardRepository;

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
        int wardNo = userInfoModel.getWardNo();
        userInfo.setStartDate(new Date());
        Ward ward = wardRepository.getByWardId(wardNo);
        userInfo.setWard(ward);
        repository.save(userInfo);
        return userInfoModel;
    }

    public WardModel addWard(WardModel wardModel){
        Ward ward = new Ward();
        ward.setSize(wardModel.getSize());
        ward.setType(wardModel.getType());
        wardRepository.save(ward);
        return wardModel;
    }
}
