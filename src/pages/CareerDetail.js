import React from "react";
import { useLoaderData } from "react-router-dom";

function CareerDetail() {
  const careerDetail = useLoaderData();

  return (
    <div className="career__details">
      <h2 style={{ borderBottom: "2px solid  #bc4123", width: "fit-content" }}>
        Career Details for {careerDetail.title}
      </h2>
      <p>
        <span>Location:</span> ${careerDetail.location}
      </p>
      <p>
        <span>Salary:</span> ${careerDetail.salary}
      </p>
      <p>
        <span>Description:</span> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corrupti officiis hic distinctio fuga harum velit,
        obcaecati quisquam perspiciatis ipsum quo, earum repudiandae? Omnis
        eaque quaerat dolorem magni, corporis voluptate saepe?
      </p>
    </div>
  );
}

export default CareerDetail;

export async function CareerDetailLoader({ params }) {
  const { id } = params;
  const res = await fetch("http://localhost:5000/careers/" + id);
  if (!res.ok) {
    throw Error("Career data not found");
  }
  return res.json();
}
