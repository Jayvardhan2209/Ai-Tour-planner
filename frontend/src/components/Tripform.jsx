
import React, { useState } from "react";
import generateTour from "../services/tourApi";
import Itinerary from "./Itinerary";
import "./Tripform.css";

const Tripform = () => {
  const [destination, setDestination] = useState("");
  const [startLocation, setStartLocation] = useState("Indore");
  const [days, setDays] = useState("");
  const [people, setPeople] = useState(1);
  const [budget, setBudget] = useState("");
  const [travelStyle, setTravelStyle] = useState("Adventure");
  const [interests, setInterests] = useState("");

  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setItinerary(null);

    try {
      const interestList = interests
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      const tourData = {
        destination,
        startLocation,
        days: Number(days),
        people: Number(people),
        budget: Number(budget),
        travelStyle,
        interests: interestList,
      };

      console.log("Tour Data:", tourData);

      const data = await generateTour(tourData);

      console.log("API Response:", data);

      const parsedItinerary =
        typeof data.tour.itinerary === "string"
          ? JSON.parse(data.tour.itinerary)
          : data.tour.itinerary;

      setItinerary(parsedItinerary);

    } catch (error) {
      console.error("Tour generation error:", error);
      setError(error.message || "Failed to generate travel plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-3">

      <div className="plan fs-3 shadow p-1">
        <b>
          <p className="fs-3">Plan Your Perfect Trip</p>
        </b>

        <p className="fs-6">
          AI-powered personalized travel planning
        </p>
      </div>

      <hr />

      <form className="container" onSubmit={handleSubmit}>

        <div className="inp">
          <p className="fw-bold">Enter the Start Location</p>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Starting location"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            required
          />
        </div>

        <div className="inp">
          <p className="fw-bold">Enter the destination</p>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>

        <div className="inp">
          <p className="fw-bold">Number of days</p>

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Number of days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            min="1"
            required
          />
        </div>

        <div className="inp">
          <p className="fw-bold">Number of people</p>

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Number of people"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            min="1"
            required
          />
        </div>

        <div className="inp">
          <p className="fw-bold">Enter the budget</p>

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Budget (₹)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            min="1"
            required
          />
        </div>

        <div className="inp">
          <p className="fw-bold">Enter the travel style</p>

          <select
            className="form-select mb-3"
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value)}
          >
            <option value="Adventure">Adventure</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Family">Family</option>
            <option value="Luxury">Luxury</option>
            <option value="Budget">Budget</option>
            <option value="Cultural">Cultural</option>
          </select>
        </div>

        <div className="inp">
          <p className="fw-bold">Enter Your Interest</p>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Interests e.g. food, history, nature"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bn btn fw-semibold mb-4"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Travel Plan"}
        </button>

      </form>

      {error && (
        <div className="alert alert-danger mt-4">
          {error}
        </div>
      )}

      {itinerary && (
        <Itinerary itinerary={itinerary} />
      )}

    </div>
  );
};

export default Tripform;
