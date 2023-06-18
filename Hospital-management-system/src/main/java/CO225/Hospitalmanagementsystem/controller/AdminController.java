package CO225.Hospitalmanagementsystem.controller;

import CO225.Hospitalmanagementsystem.entity.UserInfo;
import CO225.Hospitalmanagementsystem.entity.Ward;
import CO225.Hospitalmanagementsystem.service.AdminService;
import CO225.Hospitalmanagementsystem.service.WardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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


    @PostMapping("/new")
    public String addNewUser(@RequestBody UserInfo userInfo){
        return adminService.addUser(userInfo);
      //  return "check";
    }

    @PostMapping("/ward")
    public String addNewWard(@RequestBody Ward ward){
        return adminService.addWard(ward);
        //  return "check";
    }
}
