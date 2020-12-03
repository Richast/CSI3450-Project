package CSI3450Project.dao;

import org.springframework.data.repository.CrudRepository;

import CSI3450Project.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
    
}
