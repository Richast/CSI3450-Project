package CSI3450Project.controller;

import java.sql.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CSI3450Project.dao.*;
import CSI3450Project.model.*;

@RestController
@CrossOrigin
@RequestMapping("/csi3450project/v1")
public class CreateController {
    @Autowired private BookingRepository bookingRepository;
    @Autowired private BusinessRepository businessRepository;
    @Autowired private UserRepository userRepository;
    @Autowired private EventRepository eventRepository;
    @Autowired private RoomRepository roomRepository;

    @PostMapping("/booking")
    public void createBooking(HttpServletRequest request, @RequestBody Map<String, String> body) {
        Booking booking = new Booking();
        booking.setBusinessId(Integer.parseInt(body.get("businessId")));
        booking.setCustomerId(Integer.parseInt(body.get("customerId")));
        booking.setRoomId(Integer.parseInt(body.get("roomId")));
        booking.setDate(Date.valueOf(body.get("date")));
        booking.setDuration(Integer.parseInt(body.get("duration")));

        bookingRepository.save(booking);
    }
    
    @PostMapping("/business")
    public void createBusiness(HttpServletRequest request, @RequestBody Map<String, String> body) {
        Business business = new Business();
        business.setName(body.get("name"));
        business.setState(body.get("state"));
        business.setCity(body.get("city"));
        business.setStreet(body.get("street"));
        business.setZip(body.get("zip"));
        business.setContact(body.get("contact"));
        business.setRoomAmount(Integer.parseInt(body.get("roomAmount")));
        business.setAmenities(body.get("amenities"));

        businessRepository.save(business);
    }

    @PostMapping("/user")
    public void createUser(HttpServletRequest request, @RequestBody Map<String, String> body) {
        User user = new User();
        user.setEmail(body.get("email"));
        user.setPassword(body.get("password"));
        user.setType(body.get("type"));
        user.setName(body.get("name"));
        user.setState(body.get("state"));
        user.setCity(body.get("city"));
        user.setStreet(body.get("street"));
        user.setZip(body.get("zip"));
        user.setContact(body.get("contact"));
        user.setPayment(body.get("payment"));

        userRepository.save(user);
    }

    @PostMapping("/event")
    public void createEvent(HttpServletRequest request, @RequestBody Map<String, String> body) {
        Event event = new Event();
        event.setName(body.get("name"));
        event.setState(body.get("state"));
        event.setCity(body.get("city"));
        event.setStreet(body.get("street"));
        event.setZip(body.get("zip"));
        event.setDate(Date.valueOf(body.get("date")));
        event.setContact(body.get("contact"));
        event.setPrice(Float.parseFloat(body.get("price")));

        eventRepository.save(event);
    }

    @PostMapping("/room")
    public void createRoom(HttpServletRequest request, @RequestBody Map<String, String> body) {
        Room room = new Room();
        room.setNumber(Integer.parseInt(body.get("number")));
        room.setPrice(Float.parseFloat(body.get("price")));
        room.setVacant(true);
        room.setBusinessId(Integer.parseInt(body.get("businessId")));
        
        roomRepository.save(room);
    }
}
