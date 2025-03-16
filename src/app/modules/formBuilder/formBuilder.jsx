'use client';

import React, { useState } from 'react';

export default function FormBuilder({ formData }) {
    const [formValues, setFormValues] = useState({});

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
            return (
                <input
                  type="text"
                  name={field.name}
                  value={formValues[field.name] || ''}
                  onChange={(e) => setFieldValue(field.name, e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                />
            );
        default:
            return <div style={{"background-color": "pink"}}>DEFAULT { field.name } DEFAULT</div>;
        }
    };

    return <form className="w-full max-w-lg space-y-6">
             {formData.fields.map(field => (
                 <div key={field.name} className="space-y-2">
                   <label>{field.label}</label>
                   {renderField(field)}
                 </div>
             ))}
             <button type="submit">Submit</button>
           </form>;
}
