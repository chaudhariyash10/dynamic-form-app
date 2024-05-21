import React, { useContext, useState } from "react";
import FieldsDataContext from "../context/FieldsDataContext";
import EditField from "./EditField";

const AddField = () => {
  const { formFields, setFormFields } = useContext(FieldsDataContext);
  const [newField, setNewField] = useState({
    type: "",
    label: "",
    options: [],
    required: false,
    minLength: null,
    maxLength: null,
    pattern: "",
    accept: "",
    dependency: null,
  });
  const [showEdit, setEdit] = useState(false);

  const addField = (type) => {
    setNewField({ type, label: "", options: [] });
    setEdit(true);
  };

  const saveField = () => {
    setFormFields([...formFields, newField]);
    setEdit(false);
  };

  return (
    <>
      <h2>Add Fields</h2>
      <div>
        <button onClick={() => addField("text")}>Add Text Input</button>
        <button onClick={() => addField("textarea")}>Add Text Area</button>
        <button onClick={() => addField("dropdown")}>Add Dropdown</button>
        <button onClick={() => addField("checkbox")}>Add Checkbox</button>
        <button onClick={() => addField("radio")}>Add Radio Button</button>
        <button onClick={() => addField("file")}>Add File Upload</button>
        {showEdit && (
          <EditField
            newField={newField}
            setNewField={setNewField}
            saveField={saveField}
          />
        )}
      </div>
    </>
  );
};

export default AddField;
