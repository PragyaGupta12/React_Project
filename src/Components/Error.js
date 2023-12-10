// import { useRouteError } from "react-router-dom";
//this hook helps us get the details of the error
// const err = useRouteError();

const Error = () => {
  return (
    <div className="error">
      {/* <h1>{err.status + ":" + err.statusText}</h1> */}
      <h1>Error!!</h1>
    </div>
  );
};

export default Error;
