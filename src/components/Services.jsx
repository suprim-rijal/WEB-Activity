// src/components/Services.jsx
import { useState } from "react";
import { services } from "../data";
import Title from "./Title";

function Services() {
  const [servicesData, setServicesData] = useState(services);

  const removeService = (id) => {
    setServicesData(servicesData.filter((service) => service.id !== id));
  };

  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => {
          const { id, title, text, icon } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginTop: "10px",
                    background: "#e74c3f",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => removeService(id)}
                >
                  Remove
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
