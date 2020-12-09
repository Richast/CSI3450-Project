package CSI3450Project.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CSI3450Project.dao.*;
import CSI3450Project.model.*;

@RestController
@CrossOrigin
@RequestMapping("/csi3450project/v1")
public class ReadController {
    @Autowired private BookingRepository bookingRepository;
    @Autowired private BusinessRepository businessRepository;
    @Autowired private UserRepository userRepository;
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

    @GetMapping("/businesses/all")
    public Iterable<Business> getBusinesses(HttpServletRequest request) {
        return businessRepository.findAll();
    }

    @GetMapping("/businesses/zip")
    public List<Business> getBusinessesByZip(HttpServletRequest request, @RequestParam String zip) {
        return businessRepository.findByZip(zip);
    }

    //USER endpoints
    @GetMapping("/user")
    public User getUser(HttpServletRequest request, @RequestParam Integer userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.isPresent() ? user.get() : null;
    }

    @GetMapping("/user/login")
    public User loginUser(HttpServletRequest request, @RequestParam String email, @RequestParam String password) {
        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent() && user.get().getPassword().equals(password)) 
            return user.get();
        
        return null;
    }

    //EVENT endpoints
    @GetMapping("/event")
    public Event getEvent(HttpServletRequest request, @RequestParam Integer eventId) {
        Optional<Event> event = eventRepository.findById(eventId);
        return event.isPresent() ? event.get() : null;
    }

    @GetMapping("/events/all")
    public Iterable<Event> getEvents(HttpServletRequest request) {
        return eventRepository.findAll();
    }

    @GetMapping("/events/zip")
    public List<Event> getEventsByZip(HttpServletRequest request, @RequestParam String zip) {
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
