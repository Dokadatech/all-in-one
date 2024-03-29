// // @route POST api/auth/login
// // @desc Login employee and return JWT token
// const Employee = require("../models/employee");
// // @route POST api/auth/register
// // @desc Register user
// // @access Public
// exports.register = async (req, res) => {
//   try {
//     const { email, confirmPassword, password } = req.body;

//     // Make sure this account doesn't already exist
//     const user = await User.findOne({ email });

//     if (user)
//       return res.status(401).json({
//         message: "This email address is already in use with another account.",
//         reply: "FAILED",
//       });

//     if (confirmPassword !== password) {
//       return res.status(401).json({
//         message: "Passwords must match",
//         reply: "FAILED",
//       });
//     }
//     const newUser = new User({ ...req.body, role: "basic" });

//     const user_ = await newUser.save();
//     console.log(user);

//     await sendVerificationEmail(user_, req, res);
//     console.log(res);
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // @access Public
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const employee = await Employee.findOne({ email });

//     if (!employee)
//       return res.status(401).json({
//         msg:
//           "The email address " +
//           email +
//           " is not associated with any account. Please verify your email address and try again.",
//       });

//     //validate password
//     if (!employee.comparePassword(password))
//       return res.status(401).json({ message: "Invalid email or password" });

//     // Login successful, write token, and send back employee
//     res.status(200).json({ token: employee.generateJWT(), employee: employee });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ===EMAIL VERIFICATION
// // @route GET api/verify/:token
// // @desc Verify token
// // @access Public
// exports.verify = async (req, res) => {
//   if (!req.params.token)
//     return res.status(400).json({ message: "No user for this token." });

//   try {
//     // Find a matching token
//     const token = await Token.findOne({ token: req.params.token });

//     if (!token)
//       return res.status(400).json({
//         message: "Valid token not found. Your token my have expired.",
//       });

//     // If we found a token, find a matching user
//     User.findOne({ _id: token.userId }, (err, user) => {
//       if (!user)
//         return res
//           .status(400)
//           .json({ message: "We were unable to find a user for this token." });

//       if (user.isVerified)
//         return res
//           .status(400)
//           .json({ message: "This user has already been verified." });

//       // Verify and save the user
//       user.isVerified = true;
//       user.save(function (err) {
//         if (err) return res.status(500).json({ message: err.message });

//         res.status(200).send("Verification success. You can now login.");
//       });
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @route POST api/resend
// // @desc Resend Verification Token
// // @access Public
// exports.resendToken = async (req, res) => {
//   try {
//     const { email } = req.body;

//     const user = await User.findOne({ email });

//     if (!user)
//       return res.status(401).json({
//         message:
//           "The email address " +
//           req.body.email +
//           " is not associated with any account. Double-check your email address and try again.",
//         reply: "FAILED",
//       });

//     if (user.isVerified)
//       return res.status(400).json({
//         message: "This account has already been verified. Please log in.",
//       });

//     await sendVerificationEmail(user, req, res);
//   } catch (error) {
//     res.status(500).json({ message: error.message, reply: "FAILED" });
//   }
// };

// async function sendVerificationEmail(user, req, res) {
//   try {
//     const token = user.generateVerificationToken();

//     // Save the verification token
//     await token.save();

//     let subject = "Account Verification";
//     let to = user.email;
//     let from = process.env.FROM_EMAIL;
//     let link = "http://" + req.headers.host + "/api/auth/verify/" + token.token;
//     let html = `<p>Hi ${user.username}<p><br><p>Please click on the following <a href="${link}">link</a> to verify your account.</p>
//                   <br><p>If you did not request this, please ignore this email.</p>`;

//     await sendEmail({ to, from, subject, html });

//     res.status(200).json({
//       message: "A verification email has been sent to " + user.email + ".",
//       reply: "SUCCESS",
//       token,
//     });
//     console.log;
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }
