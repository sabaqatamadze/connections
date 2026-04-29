import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import "./Package.css";

function App() {
  const [phone, setPhone] = useState("");

  const sendEmail = () => {
    if (phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    emailjs
      .send(
        "service_7a714ks",
        "template_h4elgdo",
        { message: phone },
        "nGp5VXVKkePv-ryaA"
      )
      .then(
        () => {
          alert("Phone number sent successfully!");
          setPhone(""); 
        },
        (error) => {
          alert("Failed to send: " + error.text);
        }
      );
  };

  return (
    <div className="package">
      <div className="package-container">
        <p>Contact Us</p>
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          +995 598 56 50 02
        </p>
        <p style={{ color: "#888", margin: "10px 0" }}>or</p>

        <PhoneInput
          country={"ge"}
          value={phone}
          onChange={(value) => setPhone(value)}
          placeholder="(555) 123-4567"
          className="phone-input"
        />

        <button onClick={sendEmail}>Add Phone Number</button>
      </div>
    </div>
  );
}

export default App;