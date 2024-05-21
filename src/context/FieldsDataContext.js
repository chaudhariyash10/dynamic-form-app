import React, { createContext, useState } from "react";

const FieldsDataContext = createContext();

export const FieldsDataProvider = ({ children }) => {
  const [formFields, setFormFields] = useState([]);

  return (
    <FieldsDataContext.Provider value={{ formFields, setFormFields }}>
      {children}
    </FieldsDataContext.Provider>
  );
};

export default FieldsDataContext;