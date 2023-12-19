import { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-lg">{title}</h3>
      {isVisible ? (
        <button
          className="underline cursor-pointer text-lime-600"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="underline cursor-pointer text-lime-600"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <div className="h-auto">
      <h1 className="p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "In August 2020, Swiggy launched its instant grocery delivery service called Instamart using a network of dark stores. In early 2021, the company closed Swiggy Stores and expanded its operations under Instamart."
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "In August 2020, Swiggy launched its instant grocery delivery service called Instamart using a network of dark stores. In early 2021, the company closed Swiggy Stores and expanded its operations under Instamart."
        }
      />
      <Section
        title={"Career"}
        description={
          "In August 2020, Swiggy launched its instant grocery delivery service called Instamart using a network of dark stores. In early 2021, the company closed Swiggy Stores and expanded its operations under Instamart."
        }
      />
    </div>
  );
};

export default Instamart;
