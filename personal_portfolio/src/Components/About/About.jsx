import React from "react";
import Featured from "./Featured/Featured";

export default function About() {
  return (
    <section id="about" class="section">
      <div class="container px-lg-5">
        {/* <!-- Heading --> */}
        <div class="position-relative d-flex text-center mb-5">
          <h2 class="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0">
            About Me
          </h2>
          <p class="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
            Know Me More
            <span class="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>{" "}
          </p>
        </div>
        {/* <!-- Heading end--> */}

        <div class="row gy-5">
          <div class="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 class="text-7 fw-600 mb-3">
              I'm <span class="text-primary">Simone Olivia,</span> a Web
              Developer
            </h2>
            <p>
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
          <div class="col-lg-5 col-xl-4">
            <div class="ps-lg-4">
              <ul class="list-style-2">
                <li class="">
                  <span class="fw-600 me-2">Name:</span>Simone Olivia
                </li>
                <li class="">
                  <span class="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">chat@simone.com</a>
                </li>
                <li class="">
                  <span class="fw-600 me-2">Age:</span>28
                </li>
                <li class="border-0">
                  <span class="fw-600 me-2">From:</span>Los Angeles, California
                </li>
              </ul>
              <a href="#" class="btn btn-primary rounded-pill">
                Download CV
              </a>{" "}
            </div>
          </div>
        </div>
        <Featured />
      </div>
    </section>
  );
}
