import React, { useCallback, useState } from "react";
import useRazorpay from "react-razorpay";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [upiId, setUpiId] = useState("");
  const Razorpay = useRazorpay();

  const handlePayment = useCallback(() => {
    const options = {
      key: "YOUR_RAZORPAY_KEYID",
      amount: +amount * 100,
      currency: "INR",
      name: name,
      description: "Test Transaction",
      image:
        "https://pages.awscloud.com/rs/112-TZM-766/images/1_RAZORPAY_LOGO.png",
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: name,
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <form className="profile" style={{ marginTop: "20px" }}>
      <label> Amount: </label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>UPI ID:</label>
      <input
        type="text"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
      />
      <button type="button" onClick={handlePayment} className="googleButton">
        Pay with UPI
      </button>
    </form>
  );
};

export default PaymentForm;
