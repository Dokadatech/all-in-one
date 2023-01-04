const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeaveSchema = new Schema({
  applicantID: { type: Schema.Types.ObjectId, ref: "User", required: true },

  type: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  appliedDate: { type: Date, required: true },
  period: { type: Number, required: true, min: 1 },
  reason: { type: String, required: true },
  adminResponse: { type: String, default: "N/A" },
});

module.exports = mongoose.model("applyLeave", LeaveSchema);
