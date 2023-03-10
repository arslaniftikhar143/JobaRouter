import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Careers() {
  const careers = useLoaderData();
  console.log(careers);
  return (
    <div className="careers__wrapper">
      {careers.map((career) => {
        return (
          <Link to={career.id.toString()} key={career.id}>
            <h4>{career.title}</h4>
            <div>{`Based in ${career.location}`}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Careers;

export async function careerLoader() {
  const res = await fetch("http://localhost:5000/careers");
  return res.json();
}
