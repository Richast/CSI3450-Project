package CSI3450Project.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CSI3450Project.dao.*;
import CSI3450Project.model.*;

@RestController
@RequestMapping("/csi3450project/v1")
public class ReadController {
    @Autowired private BookingRepository bookingRepository;
    @Autowired private BusinessRepository businessRepository;
    @Autowired private CustomerRepository customerRepository;
    @Autowired private EventRepository eventRepository;
    @Autowired private RoomRepository roomRepository;

    // BOOKING endpoints
    @GetMapping("/booking")
    public Booking getBookingById(HttpServletRequest request, @RequestParam Integer bookingId) {
        Optional<Booking> booking = bookingRepository.findById(bookingId);
        return booking.isPresent() ? booking.get() : null;
    }

    @GetMapping("/booking/customer")
    public List<Booking> getBookingsForCustomer(HttpServletRequest request, @RequestParam Integer customerId) {
        return bookingRepository.findByCustomerId(customerId);
    }

    @GetMapping("/booking/business")
    public List<Booking> getBookingsForBusiness(HttpServletRequest request, @RequestParam Integer businessId) {
        return bookingRepository.findByBusinessId(businessId);
    }

    //BUSINESS endpoints
    @GetMapping("/business")
    public Business getBusiness(HttpServletRequest request, @RequestParam Integer businessId) {
        Optional<Business> business = businessRepository.findById(businessId);
        return business.isPresent() ? business.get() : null;
    }

    @GetMapping("/businesses")
    public List<Business> getBusinesses(HttpServletRequest request, @RequestParam String zip) {
        return businessRepository.findByZip(zip);
    }

    //CUSTOMER endpoints
    @GetMapping("/customer")
    public Customer getCustomer(HttpServletRequest request, @RequestParam Integer customerId) {
        Optional<Customer> customer = customerRepository.findById(customerId);
        return customer.isPresent() ? customer.get() : null;
    }

    //EVENT endpoints
    @GetMapping("/event")
    public Event getEvent(HttpServletRequest request, @RequestParam Integer eventId) {
        Optional<Event> event = eventRepository.findById(eventId);
        return event.isPresent() ? event.get() : null;
    }

    @GetMapping("/events")
    public List<Event> getEvents(HttpServletRequest request, @RequestParam String zip) {
        return eventRepository.findByZip(zip);
    }

    //ROOM endpoints
    @GetMapping("/room")
    public Room getRoom(HttpServletRequest request, @RequestParam Integer roomId) {
        Optional<Room> room = roomRepository.findById(roomId);
        return room.isPresent() ? room.get() : null;
    }

    
    @GetMapping("/room/business")
    public List<Room> getRoomsForBusiness(HttpServletRequest request, @RequestParam Integer businessId) {
        return roomRepository.findByBusinessId(businessId);
    }
    
}
