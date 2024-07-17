import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [name, setName] = useState<string>("");

  return (
    <>
      <form>
        <div>
          <label htmlFor="...">Name</label>
          <input
            type="text"
            id="name-input"
            placeholder="Enter name here"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setName(event.target.value)
            }
          />
        </div>
      </form>
    </>
  );
};

export default Calculator;
