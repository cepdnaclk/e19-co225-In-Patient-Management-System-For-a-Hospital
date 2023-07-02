package CO225.Hospitalmanagementsystem.controller;

import CO225.Hospitalmanagementsystem.entity.User;
import CO225.Hospitalmanagementsystem.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    PatientService patientService;

   // @GetMapping("/{nic}")
    //public String add(@RequestBody UserInfo userInfo){return adminService.addUser(userInfo);}
//    public String getPatient(@PathVariable String nic){
//        return patientService.getPatientByNIC(nic);
//    }

}
