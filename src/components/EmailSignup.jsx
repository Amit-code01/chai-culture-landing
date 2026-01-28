import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (!email) {
      alert("Enter valid email!");
    } else {
      alert(`Thanks! We'll notify you at ${email}`);
      setEmail(""); // clear input after submission
    }
  };

  return (
    <div className="email-box">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleClick}>Notify Me</button>
    </div>
  );
}