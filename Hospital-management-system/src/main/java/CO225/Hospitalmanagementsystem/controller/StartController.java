package CO225.Hospitalmanagementsystem.controller;

import CO225.Hospitalmanagementsystem.model.AuthRequest;
import CO225.Hospitalmanagementsystem.model.TokenModel;
import CO225.Hospitalmanagementsystem.repository.UserInfoRepository;
import CO225.Hospitalmanagementsystem.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
public class StartController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserInfoRepository userInfoRepository;

    @GetMapping("/")
    public String Hello(){
        return "Under API development process";
    }

    @GetMapping("/doc")
    public String doc(){
        return "Under doc development process";
    }

    @PostMapping("/login")
    public TokenModel authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        try {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        TokenModel tokenModel = new TokenModel();
            if (authentication.isAuthenticated()) {
                String acessToken = jwtService.generateToken(authRequest.getUsername());
                String roles = userInfoRepository.getRolesByUserName(authRequest.getUsername());
                tokenModel.setAccessToken(acessToken);
                tokenModel.setRoles(roles);
                return tokenModel;
            } else {
                tokenModel.setAccessToken("");
                tokenModel.setRoles("");
                return tokenModel;
            }
        }catch (Exception e) {
            TokenModel tokenModel = new TokenModel();
            tokenModel.setAccessToken("");
            tokenModel.setRoles("");
            return tokenModel;

        }
//
//
    }
}
