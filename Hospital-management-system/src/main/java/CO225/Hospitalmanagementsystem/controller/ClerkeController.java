package CO225.Hospitalmanagementsystem.controller;

import CO225.Hospitalmanagementsystem.model.UserInfoModel;
import CO225.Hospitalmanagementsystem.model.UserModel;
import CO225.Hospitalmanagementsystem.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/clerk")
public class ClerkeController {

    @Autowired
    private PatientService patientService;
    @PostMapping("/add")
    public UserModel addNewUser(@RequestBody UserModel userModel) throws Exception {
        return patientService.addUser(userModel);
        //  return "check";
    }


}
