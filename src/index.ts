import express from "express";
import offer from "./offers"; // Ensure this file exports correctly

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const data = await offer(0, 0); // Await the offer function
    return res.json(data); // Send a JSON response
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" }); // Handle errors
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
