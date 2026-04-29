import React, {  useState } from "react";
import "./Package.css";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";

function Package() {
  const [Phone, setPhone] = useState("");

  const sendEmail = () => {
    if (Phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    const cleaned = Phone.replace(/\D/g, "");

    const formatted = cleaned.replace(
      /(\d{3})(\d{2})(\d{3})(\d{3})/,
      "$1 $2 $3 $4"
    );


    emailjs
      .send(
        "service_7a714ks",
        "template_h4elgdo",
        {
          phone: formatted,      
          phone_raw: cleaned    
        },
        "nGp5VXVKkePv-ryaA"
      )
      .then(
        () => {
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
          value={Phone}
          onChange={(value) => setPhone(value)}
          placeholder="(555) 123-4567"
          className="phone-input"
        />

        <button onClick={sendEmail}>Add Phone Number</button>
      </div>
    </div>
  );
}

export default Package;



 

 



