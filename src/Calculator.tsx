import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const [days, setDays] = useState<number | null>(null);

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
          <label htmlFor="age ">Age </label>
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
