import React from 'react';

function FormField({ label, id, type = 'text', value, onChange, required = false }) {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default FormField;