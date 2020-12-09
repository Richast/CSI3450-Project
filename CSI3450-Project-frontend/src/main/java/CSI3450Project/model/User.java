package CSI3450Project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "USER")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private Integer id;

    @Column(name = "USER_EMAIL")
    private String email;

    @Column(name = "USER_PASSWORD")
    private String password;

    @Column(name = "USER_TYPE")
    private String type;

    @Column(name = "USER_NAME")
    private String name;

    @Column(name = "USER_STATE")
    private String state;

    @Column(name = "USER_CITY")
    private String city;

    @Column(name = "USER_STREET")
    private String street;

    @Column(name = "USER_ZIP")
    private String zip;

    @Column(name = "USER_CONTACT")
    private String contact;

    @Column(name = "USER_PAYMENT")
    private String payment;
}
