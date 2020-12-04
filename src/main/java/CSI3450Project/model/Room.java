package CSI3450Project.model;

import java.io.Serializable;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "ROOM")
@Data
public class Room implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ROOM_ID")
    private Integer id;

    @Column(name = "ROOM_NUM")
    private Integer number;

    @Column(name = "ROOM_PRICE")
    private Float price;

    @Column(name = "ROOM_VACANT")
    private Boolean vacant;

    @ManyToOne
    @JoinTable(name = "BUSINESS")
    private Business business;
}
