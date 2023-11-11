import React from 'react';
import "./generalLayout.css";

const GeneralLayout = ({ children}) => {
  return(
    <main className="layoutContainer">
      {children}
    </main>
  )
}

export default GeneralLayout;
