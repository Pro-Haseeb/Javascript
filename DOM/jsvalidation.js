// Regular expression for validating an email address
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Test the email
const email = "example@example.com";

// Check if the email matches the regex
if (emailRegex.test(email)) {
  console.log("Valid Email Address!");
} else {
  console.log("Invalid Email Address!");
}
