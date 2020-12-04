package CSI3450Project.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CSI3450Project.dao.*;
import CSI3450Project.model.*;

@RestController
@RequestMapping("/csi3450project/v1")
public class DeleteController {
    @Autowired private BookingRepository bookingRepository;
    @Autowired private CustomerRepository customerRepository;
    @Autowired private RoomRepository roomRepository;

    @DeleteMapping("/booking")
    public void deleteBooking(HttpServletRequest request, @RequestParam Integer bookingId) {
        Optional<Booking> booking = bookingRepository.findById(bookingId);

        if (booking.isPresent())
            bookingRepository.delete(booking.get());
    }

    @DeleteMapping("/customer")
    public void deleteCustomer(HttpServletRequest request, @RequestParam Integer customerId) {
        Optional<Customer> customer = customerRepository.findById(customerId);

        if (customer.isPresent())
            customerRepository.delete(customer.get());
    }

    @DeleteMapping("/room")
    public void deleteRoom(HttpServletRequest request, @RequestParam Integer roomId) {
        Optional<Room> room = roomRepository.findById(roomId);

        if (room.isPresent())
            roomRepository.delete(room.get());
    }
}
