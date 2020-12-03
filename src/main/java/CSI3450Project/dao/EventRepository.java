package CSI3450Project.dao;

import org.springframework.data.repository.CrudRepository;

import CSI3450Project.model.Event;

public interface EventRepository extends CrudRepository<Event, Integer> {
    
}
