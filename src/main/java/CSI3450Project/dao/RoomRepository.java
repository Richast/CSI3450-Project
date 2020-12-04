package CSI3450Project.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CSI3450Project.model.Room;

public interface RoomRepository extends CrudRepository<Room, Integer> {
    
}
