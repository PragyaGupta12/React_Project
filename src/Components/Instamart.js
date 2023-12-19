import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   const [isVisible, setIsVisible] = useState(false); we'll let the parent control this
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-lg">{title}</h3>
      {isVisible ? (
        //creating accordians
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
  const [visibleSection, setVisibleSection] = useState('');
  return (
    <div className="h-auto">
      <h1 className="p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "In August 2020, Swiggy launched its instant grocery delivery service called Instamart using a network of dark stores. In early 2021, the company closed Swiggy Stores and expanded its operations under Instamart."
        }
        isVisible={visibleSection === 'about'}
        setIsVisible={() => {
            setVisibleSection('about');
        }}
      />
      <Section
        title={"Team Instamart"}
        description={
          "In August 2020, Swiggy launched its instant grocery delivery service called Instamart using a network of dark stores. In early 2021, the company closed Swiggy Stores and expanded its operations under Instamart."
        }
        isVisible={visibleSection === 'team'}
        setIsVisible={() => {
            setVisibleSection('team');
        }}
      />
      <Section
        title={"Career"}
        description={
          "In August 2020, Swiggy launched its instant grocery delivery service called Instamart using a network of dark stores. In early 2021, the company closed Swiggy Stores and expanded its operations under Instamart."
        }
        isVisible={visibleSection === 'career'}
        setIsVisible={() => {
            setVisibleSection('career');
        }}
      />
    </div>
  );
};

export default Instamart;
