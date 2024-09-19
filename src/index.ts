import express from "express";
import offers from "./offers.js"; // Ensure this file exports correctly

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/offers", async (req, res) => {
  try {
    const { amount } = req.query;
    const data = await offers(amount, 0); // Await the offer function
    return res.json(data); // Send a JSON response
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" }); // Handle errors
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
