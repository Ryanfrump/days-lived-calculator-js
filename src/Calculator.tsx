import React, { useState } from "react";

/**
 * The Calculator component that provides a form to input name and age,
 * calculates age in days, and displays the result.
 */
const Calculator: React.FC = () => {
  // State for storing the name input
  const [name, setName] = useState<string>("");

  // State for storing the age input
  const [age, setAge] = useState<number | string>("");

  // State for storing the calculated days
  const [days, setDays] = useState<number | null>(null);

  /**
   * Handles changes to the age input field.
   * Converts the input value to a number if it's not empty.
   */
  const handleAgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newAge = event.target.value;
    if (newAge === "") {
      setAge("");
    } else {
      setAge(Number(newAge));
    }
  };

  /**
   * Handles form submission.
   * Calculates the age in days and updates the days state.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (typeof age === "number") {
      setDays(age * 365);
    } else {
      setDays(null);
    }
  };

  return (
    <>
      {/* Form for entering name and age */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name here"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setName(event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter age in years"
            value={age !== undefined ? age : ""}
            onChange={handleAgeChange}
          />
        </div>
        <button type="submit">Calculate Age in Days</button>
      </form>

      {/* Display the result if days are calculated */}
      {days !== null && (
        <div>
          <h2>
            {name} is {days} days old
          </h2>
        </div>
      )}
    </>
  );
};

export default Calculator;
