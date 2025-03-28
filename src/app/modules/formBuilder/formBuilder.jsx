'use client';

import React, { useState } from 'react';

export default function FormBuilder({ formData }) {
    const types = {...Object.fromEntries(Object.entries(formData.fields).map(([_, v]) => [v.name, v.type]))};
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});

    const submit = (e) => {
        e.preventDefault();
        const newErrors = {};
        formData.fields.forEach(field => {
            if ((!formValues[field.name]) && (types[field.name] !== 'multiSelect')) {
                newErrors[field.name] = 'This field required';
            }
        });

        if (Object.keys(newErrors).length === 0) {
            formData.onSubmit(formValues);
        } else {
            setErrors(newErrors);
        }
    };

    const setFieldValue = (name, value) => {
        setFormValues(prev => ({...prev, [name]: value}));
        // Clear error when field is modified
        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: null}));
        }
    };

    const renderField = (field) => {
        switch (field.type) {
        case 'text':
            return <input
                     type="text"
                     name={field.name}
                     value={formValues[field.name] || ''}
                     onChange={(e) => setFieldValue(field.name, e.target.value)}
                     className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                   />;
        case 'checkbox':
            return <div className="flex gap-4">
                     {field.options.map(option => (
                         <label key={option} className="flex gap-2">
                           <input
                             type="checkbox"
                             checked={formValues[field.name] === option}
                             onChange={() => setFieldValue(field.name, option)}
                             className="form-checkbox"
                           />
                           {option}
                         </label>
                     ))}
                   </div>;
        case 'select':
            return <select
                     name={field.name}
                     value={formValues[field.name] || ''}
                     onChange={(e) => setFieldValue(field.name, e.target.value)}
                     className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                   >
                     <option value="">Select an option</option>
                     {field.options.map(option => (
                         <option key={option} value={option}>{option}</option>
                     ))}
                   </select>;
        case 'multiSelect':
            return <div className="flex flex-col gap-2">
                     {field.options.map(option => (
                         <label key={option} className="flex items-center gap-2">
                           <input
                             type="checkbox"
                             checked={Array.isArray(formValues[field.name]) && 
                                      formValues[field.name].includes(option)}
                             onChange={() => {
                                 const currentValues = formValues[field.name] || [];
                                 const newValues = currentValues.includes(option)
                                       ? currentValues.filter(val => val !== option)
                                       : [...currentValues, option];
                                 setFieldValue(field.name, newValues);
                             }}
                             className="form-checkbox"
                           />
                           {option}
                         </label>
                     ))}
                   </div>;
        default:
            console.error("Error: Unknown field type:", field);
            return null;
        }
    };

    return <form onSubmit={submit} className="w-full max-w-lg space-y-6">
                      {formData.fields.map(field => (
                          <div key={field.name} className="space-y-2">
                            <label className="block font-medium text-gray-700">{field.label}</label>
                            {renderField(field)}
                            {errors[field.name] && (
                                <p className="text-red-500 text-sm">{errors[field.name]}</p>
                            )}
                          </div>
                      ))}
                      <button type="submit"
                              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                        Submit
                      </button>
                    </form>;
}
