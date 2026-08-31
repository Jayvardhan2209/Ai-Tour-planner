const express = require("express");
const router = express.Router();

const { GoogleGenAI } = require("@google/genai");

const Tour = require("../model/tour.jsx");

const ai = new GoogleGenAI({
  apiKey: "AQ.Ab8RN6KE_QHLP-8Snj6ySble9R-34tLrrj46gmgtgZTzU9khDA"
});


router.post("/generate", async (req, res) => {

  try {

    const {
      destination,
      startLocation,
      days,
      people,
      budget,
      travelStyle,
      interests
    } = req.body;


    // Validate input

    if (
      !destination ||
      !startLocation ||
      !days ||
      !people ||
      !budget ||
      !travelStyle
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required details"
      });
    }


    // Create prompt

    const prompt = `
You are an AI travel planner.

Create a realistic and concise travel itinerary using these details.

Destination: ${destination}
Starting Location: ${startLocation}
Number of Days: ${days}
Number of People: ${people}
Budget: ₹${budget}
Travel Style: ${travelStyle}
Interests: ${interests?.join(", ") || "General sightseeing"}

Return ONLY valid JSON.
Do not return Markdown.
Do not use code blocks.
Do not add explanations before or after the JSON.
Do not use emojis.

Use exactly this JSON structure.

{
  "destination": "",
  "startLocation": "",
  "duration": 0,
  "people": 0,
  "budget": 0,
  "days": [
    {
      "day": 1,
      "title": "",
      "morning": {
        "activity": "",
        "location": "",
        "time": "",
        "cost": 0
      },
      "afternoon": {
        "activity": "",
        "location": "",
        "time": "",
        "cost": 0
      },
      "evening": {
        "activity": "",
        "location": "",
        "time": "",
        "cost": 0
      },
      "hotel": {
        "name": "",
        "area": "",
        "roomType": "",
        "pricePerNight": 0,
        "contact": "",
        "website": ""
      },
      "transport": {
        "route": "",
        "type": "",
        "time": "",
        "cost": 0
      }
    }
  ],
  "food": {
    "dishes": [],
    "areas": [],
    "dailyCost": 0
  },
  "totalBudget": {
    "travel": 0,
    "hotels": 0,
    "food": 0,
    "transport": 0,
    "activities": 0,
    "total": 0
  },
  "tips": []
}

Important rules.

Create one hotel recommendation for every night.
Create transport information for every day.
Keep activities practical and concise.
Maximum one main activity in each time period.
Use realistic prices for the destination.
Keep the total cost within the given budget whenever realistically possible.

Do not invent hotel websites or contact numbers.
Only provide a hotel website or contact number when reliable.
If reliable information is unavailable, use an empty string.

If the destination cannot be identified, return only this JSON.

{
  "error": "Sorry this location is not in our database"
}

If the budget is too low for a realistic trip, return only this JSON.

{
  "error": "Minimum realistic budget required is ₹XXXX"
}

Do not make unrealistic accommodations just to stay within the user's budget.
website is important give all the time 
if you dont find after hard find diffent hotel 
 `;


    // Call Gemini
    console.log("1. Request received");

    const start = Date.now();

    console.log("2. Calling Gemini...");
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt
    });
    console.log("3. Gemini finished:", Date.now() - start, "ms");

    console.log("4. Sending response");

    const itinerary = response.text;


    // Save tour in MongoDB

    const tour = await Tour.create({
      destination,
      startLocation,
      days,
      people,
      budget,
      travelStyle,
      interests,
      itinerary
    });


    // Send response to frontend

    res.status(201).json({
      success: true,
      message: "Tour generated successfully",
      tour: tour
    });


  } catch (error) {

    console.error("Tour generation error:", error);

    res.status(500).json({
      success: false,
      message: "Please try agin later soory for inconvienence heavy traffic on website"
    });

  }

});


module.exports = router;