'use client';

import React, { useState } from 'react';

export default function FormBuilder({ formData }) {
    const renderField = (field) => {
        return <div>{ field.name }</div>;
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
