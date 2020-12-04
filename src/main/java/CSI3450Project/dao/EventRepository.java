package CSI3450Project.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CSI3450Project.model.Event;

public interface EventRepository extends CrudRepository<Event, Integer> {
    List<Event> findByZip(String zip);
}
