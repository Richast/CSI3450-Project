package CSI3450Project.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import CSI3450Project.model.Business;

public interface BusinessRepository extends CrudRepository<Business, Integer> {
    List<Business> findByZip(String zip);
}
