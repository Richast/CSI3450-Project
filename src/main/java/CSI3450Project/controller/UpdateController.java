package CSI3450Project.controller;

import java.sql.Date;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import CSI3450Project.dao.*;
import CSI3450Project.model.*;

@RestController
@CrossOrigin
@RequestMapping("/csi3450project/v1")
public class UpdateController {
    @Autowired private BookingRepository bookingRepository;
    @Autowired private BusinessRepository businessRepository;
    @Autowired private UserRepository userRepository;
    @Autowired private EventRepository eventRepository;
    @Autowired private RoomRepository roomRepository;

    @PutMapping("/booking")
    public void updateBooking(HttpServletRequest request, @RequestBody Map<String, String> body) {
        Optional<Booking> booking = bookingRepository.findById(Integer.parseInt(body.get("id")));

        if (booking.isPresent()) {
            if (body.containsKey("businessId"))
                booking.get().setBusinessId(Integer.parseInt(body.get("businessId")));

            if (body.containsKey("customerId"))
                booking.get().setCustomerId(Integer.parseInt(body.get("customerId")));

            if (body.containsKey("roomId"))
                booking.get().setRoomId(Integer.parseInt(body.get("roomId")));

            if (body.containsKey("date"))
                booking.get().setDate(Date.valueOf(body.get("date")));

            if (body.containsKey("duration"))
                booking.get().setDuration(Integer.parseInt(body.get("duration")));

            bookingRepository.save(booking.get());
        }
    }

    @PutMapping("/business")
    public void updateBusiness(HttpServletRequest request, @RequestBody Map<String, String> body) {
        Optional<Business> business = businessRepository.findById(Integer.parseInt(body.get("id")));

        if (business.isPresent()) {
            if (body.containsKey("name"))
                business.get().setName(body.get("name"));

            if (body.containsKey("state"))
                business.get().setState(body.get("state"));

            if (body.containsKey("city"))
                business.get().setCity(body.get("city"));

            if (body.containsKey("street"))
                business.get().setStreet(body.get("street"));

            if (body.containsKey("zip"))
                business.get().setZip(body.get("zip"));

            if (body.containsKey("contact"))
                business.get().setContact(body.get("contact"));

            if (body.containsKey("roomAmount"))
                business.get().setRoomAmount(Integer.parseInt(body.get("roomAmount")));

            if (body.containsKey("amenities"))
                business.get().setAmenities(body.get("amenities"));

            businessRepository.save(business.get());
        }
    }

    @PutMapping("/user")
    public void updateUser(HttpServletRequest request, @RequestBody Map<String, String> body) {
        Optional<User> user = userRepository.findById(Integer.parseInt(body.get("id")));

        if (user.isPresent()) {
            if (body.containsKey("email"))
                user.get().setEmail(body.get("email"));

            if (body.containsKey("password"))
                user.get().setPassword(body.get("password"));

            if (body.containsKey("type"))
                user.get().setType(body.get("type"));

            if (body.containsKey("name"))
                user.get().setName(body.get("name"));

            if (body.containsKey("state"))
                user.get().setState(body.get("state"));

            if (body.containsKey("city"))
                user.get().setCity(body.get("city"));

            if (body.containsKey("street"))
                user.get().setStreet(body.get("street"));

            if (body.containsKey("zip"))
                user.get().setZip(body.get("zip"));

            if (body.containsKey("contact"))
                user.get().setContact(body.get("contact"));

            if (body.containsKey("payment"))
                user.get().setPayment(body.get("payment"));
            
            userRepository.save(user.get());
        }
    }

    @PutMapping("/event")
    public void updateEvent(HttpServletRequest request, @RequestBody Map<String, String> body) {
        Optional<Event> event = eventRepository.findById(Integer.parseInt(body.get("id")));

        if (event.isPresent()) {
            if (body.containsKey("name"))
                event.get().setName(body.get("name"));

            if (body.containsKey("state"))
                event.get().setState(body.get("state"));

            if (body.containsKey("city"))
                event.get().setCity(body.get("city"));

            if (body.containsKey("street"))
                event.get().setStreet(body.get("street"));

            if (body.containsKey("zip"))
                event.get().setZip(body.get("zip"));

            if (body.containsKey("date"))
                event.get().setDate(Date.valueOf(body.get("date")));

            if (body.containsKey("contact"))
                event.get().setContact(body.get("contact"));

            if (body.containsKey("businessId"))
                event.get().setBusinessId(Integer.parseInt(body.get("businessId")));

            eventRepository.save(event.get());
        }
    }

    @PutMapping("/room")
    public void updateRoom(HttpServletRequest request, @RequestBody Map<String, String> body) {
        Optional<Room> room = roomRepository.findById(Integer.parseInt(body.get("id")));

        if (room.isPresent()) {
            if (body.containsKey("number"))
                room.get().setNumber(Integer.parseInt(body.get("number")));

            if (body.containsKey("price"))
                room.get().setPrice(Float.parseFloat(body.get("price")));

            if (body.containsKey("vacant"))
                room.get().setVacant(Boolean.parseBoolean(body.get("vacant")));

            if (body.containsKey("businessId"))
                room.get().setBusinessId(Integer.parseInt(body.get("businessId")));

            roomRepository.save(room.get());
        }
    }
}
