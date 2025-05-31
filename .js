
// Example alerts - can be replaced with API or database fetch
const alerts = [
  "Beware of fake helpline calls asking for UPI PIN. Bank never asks for it.",
  "Do not click on unknown links claiming bank rewards.",
  "New phishing scam targeting ATM users reported in Delhi. Stay alert!",
  "RBI warning: Never share your OTP, CVV, or password with anyone."
];

let index = 0;

function updateAlert() {
  const alertMsg = document.getElementById("alert-message");
  alertMsg.textContent = alerts[index];
  index = (index + 1) % alerts.length;
}

// Update alert every 10 seconds
updateAlert(); // Show initial alert
setInterval(updateAlert, 10000);

