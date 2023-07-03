package CO225.Hospitalmanagementsystem.controller;


import CO225.Hospitalmanagementsystem.model.*;
import CO225.Hospitalmanagementsystem.service.AdminService;
import CO225.Hospitalmanagementsystem.service.JwtService;
import CO225.Hospitalmanagementsystem.service.MailService;
import CO225.Hospitalmanagementsystem.service.WardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    AdminService adminService;
//    @Autowired
//    WardService wardService;
    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MailService mailService;



    @GetMapping("/welcome")
    //public String add(@RequestBody UserInfo userInfo){return adminService.addUser(userInfo);}
    public String Hello(){
        return "Under API development process";
    }


    @PostMapping("/staff")
    public UserInfoModel addNewUser(@RequestBody UserInfoModel userInfoModel){
        mailService.sendEmail(userInfoModel);
        return adminService.addUser(userInfoModel);
      //  return "check";
    }

    @GetMapping("/doctors")
    public List<UserInfoModel> getDoctors(){
        return adminService.getDoctors();
        //  return "check";
    }
    @GetMapping("/nurses")
    public List<UserInfoModel> getNurses(){
        return adminService.getNurses();
        //  return "check";
    }

    @GetMapping("/clerks")
    public List<ClerkDetailsModel> getClerks(){
        return adminService.getClerks();
        //  return "check";
    }


    @GetMapping("/staffCount")
    public CountModel getStaffCount(){
        return adminService.getStaffCount();
        //  return "check";
    }

    @PostMapping("/ward")
    public WardModel addNewWard(@RequestBody WardModel wardModel){
        return adminService.addWard(wardModel);
        //  return "check";
    }
    @GetMapping("/ward")
    public List<WardInfoModel> getWardInfo(){
        return adminService.getWardInfo();
        //  return "check";
    }

    @GetMapping("/admitData")
    public List<Map<Date, Integer>>  getData(){
        return adminService.getAdmitDateCount();
        //  return "check";
    }


    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
//
//
    }
}
