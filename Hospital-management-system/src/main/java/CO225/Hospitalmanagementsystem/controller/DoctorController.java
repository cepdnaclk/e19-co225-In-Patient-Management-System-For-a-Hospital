package CO225.Hospitalmanagementsystem.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class DoctorController {

    //@PreAuthorize("hasAuthority('DOCTOR')")
    @GetMapping("/doctor")
    public String secure(){
        return "Access only to doctors";
    }

}
