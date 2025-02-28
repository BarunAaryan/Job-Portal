import React from 'react';

function TextAreaField({ label, id, value, onChange, required = false }) {
  return (
    <div className="md:col-span-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        name={id}
        rows="4"
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
}

export default TextAreaField;