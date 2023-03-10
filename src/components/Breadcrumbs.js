import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation().pathname;
  //   console.log(location);
  let currentPath = "";
  const path = location
    .split("/")
    .filter((breadcumb) => {
      return breadcumb !== "";
    })
    .map((breadcumb) => {
      currentPath += `/${breadcumb}`;
      console.log(currentPath);
      return (
        <div className="breadcrumb" key={breadcumb}>
          <Link to={currentPath}>{breadcumb}</Link>
        </div>
      );
    });
  //   console.log(path);

  return <div className="breadcrumbs">{path}</div>;
}

export default Breadcrumbs;
