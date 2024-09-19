import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/abc", (req, res) => {
  res.send("Hello World with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
