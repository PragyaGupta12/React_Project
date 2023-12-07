import { useRouteError } from "react-router-dom";

const err = useRouteError();

const Error = () => {
  return (
    <div className="error">
      <h1>{err.status + ":" + err.statusText}</h1>
    </div>
  );
};

export default Error;
