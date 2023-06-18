package CO225.Hospitalmanagementsystem.service;

import CO225.Hospitalmanagementsystem.entity.UserInfo;
import CO225.Hospitalmanagementsystem.entity.Ward;
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

    public String addUser(UserInfo userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        int wardno = userInfo.getWardno();
        userInfo.setStartDate(new Date());
        Ward ward = wardRepository.getByWardId(wardno);
        userInfo.setWard(ward);
        repository.save(userInfo);
        return "user added to system ";
    }

    public String addWard(Ward ward){
        wardRepository.save(ward);
        return "ward added succesfuly";
    }
}
