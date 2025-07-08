import React, { forwardRef } from "react";

// 👇 Using forwardRef to support auto-focus on Enter key
const InputField = forwardRef(
  ({ label, name, value, onChange, placeholder, error, onKeyDown, maxLength, showCounter }, ref) => {
    return (
      <div className="mb-4">
        <label className="block font-medium mb-1 text-sm">{label}</label>
        <input
          ref={ref}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`w-full p-2 border rounded ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {/* Character Counter */}
        {showCounter && maxLength && (
          <div className="text-xs text-right text-gray-500 mt-1">
            {value.length}/{maxLength}
          </div>
        )}
        {/* Error message */}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default InputField;
