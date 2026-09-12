// src/components/Registration.jsx
import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registration successful!");
    console.log(formData);
  };

  return (
    <section
      className="section"
      style={{
        maxWidth: "500px",
        margin: "3rem auto",
        padding: "2rem",
        background: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Register an Account
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Email Address:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Phone Number:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: "#2ecc71",
            color: "white",
            padding: "0.75rem",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          Submit Registration
        </button>
      </form>
    </section>
  );
}

export default Registration;
