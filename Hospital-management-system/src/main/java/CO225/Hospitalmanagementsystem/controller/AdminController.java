package CO225.Hospitalmanagementsystem.controller;

import CO225.Hospitalmanagementsystem.entity.UserInfo;
import CO225.Hospitalmanagementsystem.entity.Ward;
import CO225.Hospitalmanagementsystem.model.UserInfoModel;
import CO225.Hospitalmanagementsystem.model.WardModel;
import CO225.Hospitalmanagementsystem.service.AdminService;
import CO225.Hospitalmanagementsystem.service.WardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    AdminService adminService;
//    @Autowired
//    WardService wardService;

    @GetMapping("/welcome")
    //public String add(@RequestBody UserInfo userInfo){return adminService.addUser(userInfo);}
    public String Hello(){
        return "Under API development process";
    }


    @PostMapping("/staff")
    public UserInfoModel addNewUser(@RequestBody UserInfoModel userInfoModel){
        return adminService.addUser(userInfoModel);
      //  return "check";
    }

    @PostMapping("/ward")
    public WardModel addNewWard(@RequestBody WardModel wardModel){
        return adminService.addWard(wardModel);
        //  return "check";
    }
}
