package CSI3450Project.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer businessId;
    private Integer customerId;
    private Integer roomId;
    private Date date;
    private Integer duration;
    
    // public Booking() {}
    
    /*
    public static RowMapper<Booking> mapper = 
        (rs, rowNum) -> {
            Booking booking = new Booking();
            return booking;
        };
    */
}
