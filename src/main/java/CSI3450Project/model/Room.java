package CSI3450Project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "ROOM")
@Data
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ROOM_ID")
    private Integer id;

    @Column(name = "ROOM_NUM")
    private Integer number;

    @Column(name = "ROOM_PRICE")
    private Float price;

    @Column(name = "ROOM_VACANT", columnDefinition = "boolean default true")
    private Boolean vacant;

    @Column(name = "BUS_ID")
    private Integer businessId;
}
