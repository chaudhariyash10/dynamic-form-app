import React, { useContext, useState } from "react";
import FieldsDataContext from "../context/FieldsDataContext";
import Field from "./Field";

const FormView = () => {
  const { formFields, setFormFields } = useContext(FieldsDataContext);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (index, value) => {
    setFormData({ ...formData, [index]: value });
    setErrors({ ...errors, [index]: "" });
  };

  const removeField = (idx) => {
    setFormFields((prevFormFields) => {
      const updatedFormFields = prevFormFields.filter((_, index) => index !== idx);
      setFormData((prevFormData) => {
        const newFormData = {};
        Object.entries(prevFormData).forEach(([key, value]) => {
          const parsedKey = parseInt(key);
          if (parsedKey < idx) {
            newFormData[parsedKey] = value;
          } else if (parsedKey > idx) {
            newFormData[parsedKey - 1] = value;
          }
        });
        return newFormData;
      });
      return updatedFormFields;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = formFields.map((field, index) => {
      return { ...field, value: formData[index] };
    });
    console.log(submitData);
  };

  const isFieldVisible = (field) => {
    if (field.dependency) {
      const dependentField = formFields.find((f) => f.name === field.dependency.field);
      if (dependentField && formData[formFields.indexOf(dependentField)] !== field.dependency.value) {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit} className="form-preview">
        {formFields.map((field, index) => (
          isFieldVisible(field) && (
            <div key={index}>
              <Field
                field={field}
                formData={formData}
                index={index}
                handleChange={handleChange}
                removeField={removeField}
              />
            </div>
          )
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormView;
