import express from "express";
import offers from "./offers.js"; // Ensure this file exports correctly
import cache from "./cache.js";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.get("/", async (req, res) => {
    try {
        const { amount } = req.query;
        if (!amount) {
            return res
                .status(400)
                .json({ error: "Amount query parameter is required" });
        }
        const data = await offers(amount, 0);
        return res.json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred" });
    }
});
app.get("/cached", async (req, res) => {
    try {
        //const data = await offers(amount, 0); // Await the offer function
        const data = await cache();
        return res.json(data); // Send a JSON response
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred" }); // Handle errors
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map