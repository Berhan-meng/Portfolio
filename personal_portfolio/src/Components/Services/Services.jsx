import React from "react";
import ServiceList from "./Service-list/ServiceList";

export default function Services() {
  return (
    <section id="services" className="section bg-light">
      <div className="container px-lg-5">
        {/* <!-- Heading --> */}
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0">
            Services
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>{" "}
          </p>
        </div>
        {/* <!-- Heading end--> */}
        <ServiceList />
      </div>
    </section>
  );
}
