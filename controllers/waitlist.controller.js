const Waitlist = require("../models/waitlist.model");
const sendEmail = require("../services/email");

const submitWaitlist = async (req, res, next) => {
  try {
    const { email, feature, alternatives, success, otherFinancialApp, otherSuccessMetric, country, price } = req.body;

    const existingEntry = await Waitlist.findOne({ email });
    if (existingEntry) {
      return res.status(409).json({
        // 409 Conflict
        success: false,
        message: "This email is already on the waitlist",
      });
    }

    // Create new waitlist entry
    const waitlistEntry = await Waitlist.create({
      email,
      feature,
      price,
      alternatives,
      success,
      otherFinancialApp: alternatives === "Other" ? otherFinancialApp : "",
      otherSuccessMetric: success === "Other" ? otherSuccessMetric : "",
      country,
    });

    if (waitlistEntry) {
      await sendEmail(email);
    }

    return res.status(201).json({
      // 201 Created
      success: true,
      message: "Waitlist entry created successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getAllWaitlists = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, sort = "-createdAt" } = req.query;

    const waitlists = await Waitlist.find()
      .sort(sort)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit))
      .select("-__v");

    const total = await Waitlist.countDocuments();

    res.status(200).json({
      // 200 OK
      success: true,
      data: waitlists,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitWaitlist,
  getAllWaitlists,
};
