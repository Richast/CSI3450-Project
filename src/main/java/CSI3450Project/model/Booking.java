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
@Table(name = "BOOKING")
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "BOOKING_ID")
    private Integer id;
    
    @Column(name = "BUS_ID")
    private Integer businessId;

    @Column(name = "CUS_ID")
    private Integer customerId;

    @Column(name = "ROOM_ID")
    private Integer roomId;

    @Column(name = "BOOKING_DATE")
    private Date date;

    @Column(name = "BOOKING_DURATION")
    private Integer duration;
}
