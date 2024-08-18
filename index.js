const express = require("express");
const cors = require("cors");
const { jobCategories } = require("./constants/jobDescription");
const { skills } = require("./constants/skillsData");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get(
  "/data",
  asyncHandler(async (req, res) => {
    const { category } = req.query;
    let categoryData = [];
    const categories = jobCategories;

    const job = jobCategories.find((job) => job.name === category);
    console.log(category);
    if (category) {
      categoryData = skills.find((item) => item.name === job?.name);

      if (!categoryData) {
        return res.status(404).json({ status: "failed", message: "Category not found" });
      }
      res.status(200).json({ status: "success", data: { categories, categoryData } });
    } else {
      res.status(200).json({ status: "success", data: { categories } });
    }
  })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
