var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmployeeSalarySchema = new Schema({
  accountManagerID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  employeeID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  payRate: { type: Number, default: 0 },
  hoursWorked: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
  reasonForBonus: { type: String, default: "N/A" },
  //TODO add the rest of the paystub info here
});

module.exports = mongoose.model("UserSalary", EmployeeSalarySchema);
