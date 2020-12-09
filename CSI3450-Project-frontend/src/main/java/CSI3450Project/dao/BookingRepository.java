package CSI3450Project.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CSI3450Project.model.Booking;

public interface BookingRepository extends CrudRepository<Booking, Integer> {
    List<Booking> findByCustomerId(Integer customerId);

    List<Booking> findByBusinessId(Integer businessId);
}
