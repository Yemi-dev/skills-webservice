const { v4: uuidv4 } = require("uuid");

const jobCategories = [
  { id: uuidv4(), name: "Software Development" },
  { id: uuidv4(), name: "Data Science" },
  { id: uuidv4(), name: "Product Management" },
  { id: uuidv4(), name: "Customer Support" },
  { id: uuidv4(), name: "Human Resources" },
  { id: uuidv4(), name: "Finance" },
  { id: uuidv4(), name: "Marketing" },
  { id: uuidv4(), name: "Sales" },
  { id: uuidv4(), name: "Design" },
  { id: uuidv4(), name: "Engineering" },
  { id: uuidv4(), name: "Operations" },
  { id: uuidv4(), name: "Legal" },
  { id: uuidv4(), name: "Healthcare" },
  { id: uuidv4(), name: "Education" },
  { id: uuidv4(), name: "Administration" },
  { id: uuidv4(), name: "Project Management" },
  { id: uuidv4(), name: "IT Support" },
  { id: uuidv4(), name: "Logistics" },
  { id: uuidv4(), name: "Engineering Management" },
  { id: uuidv4(), name: "Consulting" },
  { id: uuidv4(), name: "Research and Development" },
  { id: uuidv4(), name: "Business Development" },
  { id: uuidv4(), name: "Public Relations" },
  { id: uuidv4(), name: "Product Design" },
  { id: uuidv4(), name: "Creative" },
];


module.exports = {
  jobCategories,
};
