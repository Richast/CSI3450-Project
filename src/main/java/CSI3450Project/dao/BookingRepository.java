package CSI3450Project.dao;

import org.springframework.data.repository.CrudRepository;

import CSI3450Project.model.Booking;

public interface BookingRepository extends CrudRepository<Booking, Integer> {
    
}
