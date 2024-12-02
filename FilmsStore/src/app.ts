import express from "express";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import filmRoutes from "./routes/filmRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/films", filmRoutes);
app.use(filmRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
