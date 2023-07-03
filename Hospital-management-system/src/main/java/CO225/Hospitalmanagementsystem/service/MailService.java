package CO225.Hospitalmanagementsystem.service;

import CO225.Hospitalmanagementsystem.model.UserInfoModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class MailService {
    @Autowired
    JavaMailSender javaMailSender;

    public String sendEmail(UserInfoModel userInfoModel) {
        SimpleMailMessage message = new SimpleMailMessage();
        String formattedRole = userInfoModel.getRoles().substring(5)
                .toLowerCase().replace("_", " ");
        String result = formattedRole.substring(0, 1).toUpperCase() + formattedRole.substring(1);

        message.setFrom("unicusuop@gmail.com");
        message.setTo(userInfoModel.getEmail());
        String text = "Welcome to MEDnet you have been added to MEDnet medical staff as a "+result
                +"\n"+"Your user Name:"+userInfoModel.getUserName()
                +"\n" +"Your password:" +userInfoModel.getPassword();
        message.setSubject("Registration to MEDnet");
        message.setText(text);

        javaMailSender.send(message);

        return "Mail sent successfully";
    }
}
