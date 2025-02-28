import Image from "next/image";
import FormBuilder from "./modules/formBuilder/formBuilder";
import React from "react";

export default function Home() {
  /**
  This is a React component that renders a form using a custom FormBuilder component. 
  The form is dynamically generated based on a formData object, 
  which specifies various fields such as text inputs, checkboxes, and select/multi-select options. 
  The form allows the user to provide details such as their name, proficiency in programming languages, 
  availability to work in the office, and more.
  
   */
  const formData = {
    fields: [
      {
        type: "text",
        name: "firstName",
        label: "First Name",
      },
      {
        type: "text",
        name: "lastName",
        label: "Last Name",
      },
      {
        type: "checkbox",
        name: "isSoftwareEngineer",
        label: "Are you a Software Engineer?",
        options: ["yes", "no"],
      },
      {
        type: "multiSelect",
        name: "proficiency",
        label: "Which languages are you proficient in?",
        options: ["Javascript", "Java", "Python", "CSS", "SQL", "None of them"],
      },
      {
        type: "multiSelect",
        name: "officeDays",
        label: "When can you come to our office in Palo Alto?",
        options: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Never",
        ],
      },
      {
        type: "select",
        name: "operatingSystem",
        label: "What's your favorite operating system to code on?",
        options: ["Mac", "Windows", "Linux"],
      },
    ],
    onSubmit: function (formValues) {
      console.log("On Save, formValues:", formValues);
    },
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>Below renders the form builder</h3>
        <FormBuilder />
      </main>
    </div>
  );
}
