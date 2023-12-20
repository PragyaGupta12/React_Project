// import { useRouteError } from "react-router-dom";
//this hook helps us get the details of the error
// const err = useRouteError();

const Error = () => {
  return (
    <div className="error">
      {/* <h1>{err.status + ":" + err.statusText}</h1> */}
      <h1 className="p-5 m-5 text-lime-600">Hi, I am trying to fetch data from the API. Please try ctrl+R under Network in inspect. Thank You!!</h1>
    </div>
  );
};

export default Error;
