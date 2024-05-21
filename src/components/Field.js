import React from "react";

function Field({ field, index, formData, handleChange, removeField }) {
  const renderField = () => {
    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            value={formData[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            required={field.required}
            minLength={field.minLength}
            maxLength={field.maxLength}
            pattern={field.pattern}
          />
        );
      case "textarea":
        return (
          <textarea
            value={formData[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            required={field.required}
            minLength={field.minLength}
            maxLength={field.maxLength}
          />
        );
      case "dropdown":
        return (
          <select
            value={formData[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            required={field.required}
          >
            <option value="">Select an option</option>
            {field.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={formData[index] || false}
            onChange={(e) => handleChange(index, e.target.checked)}
            required={field.required}
          />
        );
      case "radio":
        return field.options.map((option, i) => (
          <React.Fragment key={i}>
            <input
              type="radio"
              name={`radio-${index}`}
              value={option}
              checked={formData[index] === option}
              onChange={(e) => handleChange(index, option)}
              required={field.required}
            />
            <label>{option}</label>
          </React.Fragment>
        ));
      case "file":
        return (
          <input
            type="file"
            onChange={(e) => handleChange(index, e.target.files[0])}
            accept={field.accept}
            required={field.required}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <label>{field.label}</label>
      {renderField()}
      <button onClick={() => removeField(index)}>Remove</button>
    </div>
  );
}

export default Field;
