import React, { useState } from "react";
import "./Instamart.css";

const Section = ({ children, title, isVisible, setIsVisible }) => {
  return (
    <div className="section">
      <h3>{title}</h3>
      {isVisible ? (
        <button
          className="section-button"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="section-button"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
      {isVisible && <p>{children}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("team");
  return (
    <div className="instamart">
      <Section
        title={"About"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setIsVisibleSection("about");
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dolor ac
        ipsum tempor aliquam. Sed imperdiet nec ex ut aliquam. Suspendisse
        hendrerit velit non elit imperdiet tincidunt. Pellentesque malesuada
        feugiat porta. Etiam sollicitudin cursus tortor quis lacinia. Phasellus
        faucibus diam in felis imperdiet, eget ultricies tortor aliquam. Sed
        condimentum, libero at efficitur varius, mi augue eleifend dolor, at
        ullamcorper tellus mi et sem. Integer vitae metus sit amet odio
        fringilla sollicitudin.
      </Section>
      <Section
        title={"Teams"}
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          setIsVisibleSection("team");
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dolor ac
        ipsum tempor aliquam. Sed imperdiet nec ex ut aliquam. Suspendisse
        hendrerit velit non elit imperdiet tincidunt. Pellentesque malesuada
        feugiat porta. Etiam sollicitudin cursus tortor quis lacinia. Phasellus
        faucibus diam in felis imperdiet, eget ultricies tortor aliquam. Sed
        condimentum, libero at efficitur varius, mi augue eleifend dolor, at
        ullamcorper tellus mi et sem. Integer vitae metus sit amet odio
        fringilla sollicitudin.
      </Section>
      <Section
        title={"Careers"}
        isVisible={visibleSection === "career"}
        setIsVisible={() => {
          setIsVisibleSection("career");
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dolor ac
        ipsum tempor aliquam. Sed imperdiet nec ex ut aliquam. Suspendisse
        hendrerit velit non elit imperdiet tincidunt. Pellentesque malesuada
        feugiat porta. Etiam sollicitudin cursus tortor quis lacinia. Phasellus
        faucibus diam in felis imperdiet, eget ultricies tortor aliquam. Sed
        condimentum, libero at efficitur varius, mi augue eleifend dolor, at
        ullamcorper tellus mi et sem. Integer vitae metus sit amet odio
        fringilla sollicitudin.
      </Section>
    </div>
  );
};

export default Instamart;
