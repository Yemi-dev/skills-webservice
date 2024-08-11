const { v4: uuidv4 } = require("uuid");

const jobCategories = [
  { id: uuidv4(), name: "Software Development" },
  { id: uuidv4(), name: "Data Science" },
  { id: uuidv4(), name: "Product Management" },
  { id: uuidv4(), name: "Customer Support" },
  { id: uuidv4(), name: "Human Resources" },
  { id: uuidv4(), name: "Finance" },
];

module.exports = {
  jobCategories,
};
