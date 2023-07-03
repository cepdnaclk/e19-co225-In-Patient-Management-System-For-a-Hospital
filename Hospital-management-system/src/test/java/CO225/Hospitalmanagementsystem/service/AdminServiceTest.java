package CO225.Hospitalmanagementsystem.service;

import CO225.Hospitalmanagementsystem.entity.UserInfo;
import CO225.Hospitalmanagementsystem.entity.Ward;
import CO225.Hospitalmanagementsystem.model.WardModel;
import CO225.Hospitalmanagementsystem.repository.UserInfoRepository;
import CO225.Hospitalmanagementsystem.repository.WardRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AdminServiceTest {
    @Autowired
    UserInfoRepository repo;

    @Autowired
    AdminService admin;

    @Autowired
    WardRepository wardrepo;

    @BeforeEach
    void setUp() {
//        UserInfo staff =
//                UserInfo.builder()
//                        .userName("test")
//                        .password("1234")
//                        .roles("ROLE_DOCTOR")
//                        .email("dummy")
//                        .birthDate("11/10/2222")
//                        .name("dummy name")
//                        .build();
        Ward ward =
                Ward.builder()
                                .size(20).type("check").build();

        Mockito.when(wardrepo.save(ward))
                .thenReturn(ward);



    }

    @Test
    @DisplayName("Get response back on ward addition")
    public void wardAddTest() {
        WardModel ward_test =
                WardModel.builder()
                        .size(20).type("check").build();

        WardModel found =
                admin.addWard(ward_test);

        assertEquals(ward_test.getType(), found.getType());
    }

}