const express = require("express");
const router = express.Router();

const { GoogleGenAI } = require("@google/genai");

const Tour = require("../model/tour.jsx");

const ai = new GoogleGenAI({
  apiKey: "AQ.Ab8RN6JSprSGoRkFvBwhUSfS6tiINCPwfGjgoU-6hn2xe4yyYw"
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

Create a detailed travel itinerary using the following information:

Destination: ${destination}
Starting Location: ${startLocation}
Number of Days: ${days}
Number of People: ${people}
Budget: ₹${budget}
Travel Style: ${travelStyle}
Interests: ${interests?.join(", ") || "General sightseeing"}

=Format the travel itinerary in a clean, attractive, and easy-to-read structure.

Use:
- Clear headings
- Day-by-day sections
- Bullet points for activities
- Separate sections for morning, afternoon, and evening
- Approximate timings where useful
- Estimated costs where possible
- Travel/transport suggestions
- Hotel/accommodation suggestions
- Food recommendations
- Important tips

Do NOT return JSON.
Do NOT use excessive emojis.
Keep the formatting simple and readable.

Use this structure:

🌍 [Destination] Travel Plan

📋 Trip Overview
- Starting Location:
- Destination:
- Duration:
- Number of People:
- Budget:
- Travel Style:
- Interests:

🗓️ Day 1 — [Title]
🌅 Morning
- Activity
- Location
- Approximate time
- Estimated cost

☀️ Afternoon
- Activity
- Location
- Approximate time
- Estimated cost

🌆 Evening
- Activity
- Location
- Approximate time
- Estimated cost

🏨 Accommodation
- Suggested area
- Type of accommodation
- Approximate price range

🍴 Food Recommendations
- Local dishes
- Recommended food areas

🚗 Transportation
- How to reach the destination
- Local transportation options

💰 Estimated Budget
- Accommodation:
- Food:
- Transportation:
- Activities:
- Total:

💡 Travel Tips
- Tip 1
- Tip 2
- Tip 3

Make the itinerary practical and ensure that the total estimated cost stays within the user's specified budget.
Give refremce of the hotel name with contact details and website link
if you thik the budget or any thing is not available at that location respon me that message please increase bydget or tell the ,im budget require to travell that area and dep search about the comodation because i have tested this website with many people that they seay acomaodation is ot possible by the price you give 
so be scietific
If you cnt find location tell sorry this location is not in datbase
if budget is inapropriate juste tell the minimum biudget
very importnt should not cointain special character like !@#$%%^^^Z&*

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
      message: "Please try agin later soory for inconvienence"
    });

  }

});


module.exports = router;