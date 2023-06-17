package CO225.Hospitalmanagementsystem.controller;

import CO225.Hospitalmanagementsystem.entity.Records;
import CO225.Hospitalmanagementsystem.service.RecordsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecordsController {

    @Autowired
    RecordsService recordsService;

    @PostMapping("/records")
    public String record(@RequestBody Records records){
        return recordsService.addRecords(records);
    }
}
