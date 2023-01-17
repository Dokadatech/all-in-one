const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { title, body } = req.body;
  try {
  } catch (error) {}

  // Send the notification to the user
  //   sendNotification(userId, message);
  res.json({ message: "Notification sent" });
});

function sendNotification(userId, message) {
  // Code to send the notification to the user using a service like Firebase Cloud Messaging or OneSignal
}

module.exports = router;
