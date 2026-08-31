import React from 'react'
import "./Itinerary.css"
const Itinerary = ({ itinerary }) => {
  return (
    <div className="container mt-4">

      {itinerary.days.map((day) => (
        <div className="card shadow-sm mb-4 p-4" key={day.day}>

          <h2 className="fw-bold">
            Day {day.day}
          </h2>

          <h4 className="text-secondary mb-4">
            {day.title}
          </h4>

          <h5 className="fw-semibold">Morning</h5>
          <p>
            {day.morning.activity}
            <br />
            {day.morning.location}
            <br />
            {day.morning.time}
            <br />
            ₹{day.morning.cost}
          </p>

          <h5 className="fw-semibold">Afternoon</h5>
          <p>
            {day.afternoon.activity}
            <br />
            {day.afternoon.location}
            <br />
            {day.afternoon.time}
            <br />
            ₹{day.afternoon.cost}
          </p>

          <h5 className="fw-semibold">Evening</h5>
          <p>
            {day.evening.activity}
            <br />
            {day.evening.location}
            <br />
            {day.evening.time}
            <br />
            ₹{day.evening.cost}
          </p>

          <hr />

          <h5 className="fw-bold">
            Hotel for Night {day.day}
          </h5>

          <p>
            {day.hotel.name}
            <br />
            {day.hotel.area}
            <br />
            ₹{day.hotel.pricePerNight} per night
          </p>

          {day.hotel.website && (
            <a
              href={day.hotel.website}
              target="_blank"
              rel="noreferrer"
              className='official-link'
            >
              click here to book hotel 

            </a>
          )}

          <h5 className="fw-bold mt-3">
            Transport
          </h5>

          <p>
            {day.transport.route}
            <br />
            {day.transport.type}
            <br />
            {day.transport.time}
            <br />
            ₹{day.transport.cost}
          </p>

        </div>
      ))}

    </div>
  );
};

export default Itinerary;