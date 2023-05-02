const otpGenerator = require("otp-generator");
const twilio = require("twilio");

const accountSid = "TWILIO_ACCOUNT_SID";
const authToken = "AUTH_TOKEN";
const client = twilio(accountSid, authToken);

exports.generateAndSendOtp = async (req, res) => {
  const phoneNumber = req.query.phone;

  // Generate OTP
  const otp = otpGenerator.generate(6, {
    digits: true,
    alphabets: false,
    upperCase: false,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  try {
    // Send OTP via SMS using Twilio
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      to: "+" + phoneNumber,
      from: "TWILIO_NUMBER",
    });

    console.log(result);

    return res.json({ message: "OTP sent successfully", status: 200 });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to send OTP" });
  }
};
