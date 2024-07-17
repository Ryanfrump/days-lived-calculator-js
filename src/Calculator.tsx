import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | string>();

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

  return (
    <>
      <form>
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
      </form>
    </>
  );
};

export default Calculator;
