package CO225.Hospitalmanagementsystem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StartController {

    @GetMapping("/")
    public String Hello(){
        return "Under API development process";
    }

    @GetMapping("/doc")
    public String doc(){
        return "Under doc development process";
    }
}
