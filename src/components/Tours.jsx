// src/components/Tours.jsx
import { useState } from "react";
import { tours } from "../data";
import Title from "./Title";

function Tours() {
  const [toursData, setToursData] = useState(tours);

  const removeTour = (id) => {
    setToursData(toursData.filter((tour) => tour.id !== id));
  };

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {toursData.map((tour) => {
          const { id, title, info, location, duration, cost, image } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
                <p className="tour-date">{location}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${cost}</p>
                </div>
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginTop: "15px",
                    background: "#e74c3f",
                    color: "#fff",
                    border: "none",
                    padding: "6px 12px",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={() => removeTour(id)}
                >
                  Not Interested
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
