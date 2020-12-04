package CSI3450Project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "CUSTOMER")
@Data
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CUS_ID")
    private Integer id;

    @Column(name = "CUS_NAME")
    private String name;

    @Column(name = "CUS_STATE")
    private String state;

    @Column(name = "CUS_CITY")
    private String city;

    @Column(name = "CUS_STREET")
    private String street;

    @Column(name = "CUS_ZIP")
    private String zip;

    @Column(name = "CUS_CONTACT")
    private String contact;

    @Column(name = "CUS_PAYMENT")
    private String payment;
}
