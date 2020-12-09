package CSI3450Project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "BUSINESS")
@Data
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BUS_ID")
    private Integer id;

    @Column(name = "BUS_NAME")
    private String name;

    @Column(name = "BUS_STATE")
    private String state;

    @Column(name = "BUS_CITY")
    private String city;
    
    @Column(name = "BUS_STREET")
    private String street;

    @Column(name = "BUS_ZIP")
    private String zip;

    @Column(name = "BUS_CONTACT")
    private String contact;
    
    @Column(name = "BUS_ROOMS")
    private Integer roomAmount;

    @Column(name = "BUS_AMENITIES")
    private String amenities;
}
