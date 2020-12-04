package CSI3450Project.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "EVENT")
@Data
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "EVENT_ID")
    private Integer id;

    @Column(name = "EVENT_NAME")
    private String name;

    @Column(name = "EVENT_STATE")
    private String state;

    @Column(name = "EVENT_CITY")
    private String city;

    @Column(name = "EVENT_STREET")
    private String street;

    @Column(name = "EVENT_ZIP")
    private String zip;

    @Column(name = "EVENT_DATE")
    private Date date;

    @Column(name = "EVENT_CONTACT")
    private String contact;

    @Column(name = "EVENT_PRICE")
    private Float price;

    @Column(name = "BUS_ID")
    private Integer businessId;
}
