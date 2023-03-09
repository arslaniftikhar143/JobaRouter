import { Link, useRouteError } from "react-router-dom";

function CareerError() {
  const error = useRouteError();
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link style={{ marginTop: "1em" }} to="/careers">
        Back to careers
      </Link>
    </div>
  );
}

export default CareerError;
