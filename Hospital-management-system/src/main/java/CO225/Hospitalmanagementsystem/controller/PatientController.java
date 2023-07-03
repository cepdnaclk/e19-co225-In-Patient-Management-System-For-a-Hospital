package CO225.Hospitalmanagementsystem.controller;

import CO225.Hospitalmanagementsystem.entity.User;
import CO225.Hospitalmanagementsystem.model.UserModel;
import CO225.Hospitalmanagementsystem.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    PatientService patientService;

    @GetMapping("/{name}")
    public Optional<User> getPatient(@PathVariable("name") String nic){
        return patientService.getPatientByNIC(nic);
    }

}
