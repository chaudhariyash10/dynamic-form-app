import React from "react";
import DropdownOptions from "./DropdownOptions";

const EditField = ({ newField, setNewField, saveField }) => {
  const updateField = (key, value) => {
    setNewField({ ...newField, [key]: value });
  };

  return (
    <div>
      <label>Label:</label>
      <input
        type="text"
        value={newField.label}
        onChange={(e) => updateField("label", e.target.value)}
      />
      <label>Type:</label>
      <select
        value={newField.type}
        onChange={(e) => updateField("type", e.target.value)}
      >
        <option value="text">Text</option>
        <option value="textarea">Text Area</option>
        <option value="dropdown">Dropdown</option>
        <option value="checkbox">Checkbox</option>
        <option value="radio">Radio</option>
        <option value="file">File</option>
      </select>
      {newField.type === "dropdown" && (
        <DropdownOptions
          options={newField.options}
          updateOptions={(options) => updateField("options", options)}
        />
      )}
      <label>Required:</label>
      <input
        type="checkbox"
        checked={newField.required || false}
        onChange={(e) => updateField("required", e.target.checked)}
      />
      {newField.type === "text" || newField.type === "textarea" ? (
        <>
          <label>Min Length:</label>
          <input
            type="number"
            value={newField.minLength || ""}
            onChange={(e) => updateField("minLength", e.target.value)}
          />
          <label>Max Length:</label>
          <input
            type="number"
            value={newField.maxLength || ""}
            onChange={(e) => updateField("maxLength", e.target.value)}
          />
          <label>Pattern:</label>
          <input
            type="text"
            value={newField.pattern || ""}
            onChange={(e) => updateField("pattern", e.target.value)}
          />
        </>
      ) : null}
      {newField.type === "file" && (
        <>
          <label>Accept:</label>
          <input
            type="text"
            value={newField.accept || ""}
            onChange={(e) => updateField("accept", e.target.value)}
          />
        </>
      )}
      <button onClick={saveField}>Save</button>
    </div>
  );
};

export default EditField;
