import React from "react";

const DropdownOptions = ({ options, updateOptions }) => {
  const addOption = () => {
    updateOptions([...options, ""]);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    updateOptions(newOptions);
  };

  const updateOption = (index, value) => {
    const newOptions = options.slice();
    newOptions[index] = value;
    updateOptions(newOptions);
  };

  return (
    <div>
      <button onClick={addOption}>Add Option</button>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => updateOption(index, e.target.value)}
          />
          <button onClick={() => removeOption(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default DropdownOptions;