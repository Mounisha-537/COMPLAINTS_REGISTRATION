const mongoose = require('mongoose');
const User = require('./models/User');
const Complaint = require('./models/Complaint');
const AssignedComplaint = require('./models/AssignedComplaint');

const result = require('dotenv').config();

console.log("dotenv result:", result);
console.log("Current directory:", process.cwd());
console.log("Mongo URI:", process.env.MONGO_URI);

const check = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected successfully");

    const userCount = await User.countDocuments();
    const complaintCount = await Complaint.countDocuments();
    const assignCount = await AssignedComplaint.countDocuments();

    console.log("Users:", userCount);
    console.log("Complaints:", complaintCount);
    console.log("Assignments:", assignCount);

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

check();