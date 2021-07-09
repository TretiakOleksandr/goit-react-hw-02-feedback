import React from "react";

const Section = (
  { title, children } // children є складовою props взагалі
) => (
  <>
    <h1>{title}</h1>
    {children}
  </>
);

export default Section;
