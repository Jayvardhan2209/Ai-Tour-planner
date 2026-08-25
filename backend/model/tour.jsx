const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({

  destination: {
    type: String,
    required: true
  },

  startLocation: {
    type: String,
    required: true
  },

  days: {
    type: Number,
    required: true
  },

  people: {
    type: Number,
    required: true
  },

  budget: {
    type: Number,
    required: true
  },

  travelStyle: {
    type: String,
    required: true
  },

  interests: {
    type: [String],
    default: []
  },

  itinerary: {
    type: String,
    default: ""
  }

});

module.exports = mongoose.model("Tour", tourSchema);