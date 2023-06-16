package CO225.Hospitalmanagementsystem.config;

import CO225.Hospitalmanagementsystem.entity.UserInfo;
import CO225.Hospitalmanagementsystem.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserInfoUserDetailsService implements UserDetailsService {

    @Autowired
    private UserInfoRepository userInfoRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserInfo> userInfo = userInfoRepository.findByUserName(username);
        return userInfo.map(UserInfoUserDetails::new)
                .orElseThrow(()-> new UsernameNotFoundException("not found"+username));
    }
}
