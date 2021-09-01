import { useState } from "react";
import axios from "axios";
import "../style.css";

function Form() {
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    country: "",
    position: "",
    wage: "",
  });

  const employeeSubmit = async (e) => {
    e.preventDefault();
    if (
      employee.name &&
      employee.age &&
      employee.country &&
      employee.position &&
      employee.position &&
      employee.wage
    ) {
      await axios
        .post("http://localhost:3001/create", employee)
        .then(() => console.log("Successfully added employee details."));
      setEmployee({
        name: "",
        age: "",
        country: "",
        position: "",
        wage: "",
      });
    } else alert("Fill the form completely!");
  };

  return (
    <form className="form" onSubmit={employeeSubmit}>
      <h2>Registration</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          autoComplete="off"
          type="text"
          id="name"
          value={employee.name}
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          autoComplete="off"
          type="number"
          id="age"
          value={employee.age}
          onChange={(e) =>
            setEmployee({ ...employee, age: e.target.valueAsNumber })
          }
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          autoComplete="off"
          type="text"
          id="country"
          value={employee.country}
          onChange={(e) =>
            setEmployee({ ...employee, country: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <input
          autoComplete="off"
          type="text"
          id="position"
          value={employee.position}
          onChange={(e) =>
            setEmployee({ ...employee, position: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="wage">Wage</label>
        <input
          autoComplete="off"
          type="number"
          id="wage"
          value={employee.wage}
          onChange={(e) => setEmployee({ ...employee, wage: e.target.value })}
        />
      </div>
      <button type="submit">Add employee</button>
    </form>
  );
}

export default Form;
