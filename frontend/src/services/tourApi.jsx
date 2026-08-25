const generateTour = async (tourData) => {
  const response = await fetch(
    "http://localhost:5000/api/tourroute/generate",
    // "https://ai-tour-planner-dbn2.onrender.com",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tourData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to generate tour");
  }

  return data;
};

export default generateTour;