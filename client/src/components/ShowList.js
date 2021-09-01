import axios from "axios";
import { useEffect, useState } from "react";
import TRow from "./TRow";

function ShowList() {
  const [employees, setEmployees] = useState(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const showEmployee = async () => {
      await axios
        .get("http://localhost:3001/employees")
        .then((res) => setEmployees(res.data))
        .catch((err) => {
          console.log(err.message);
        });
    };
    showEmployee();
  }, [open]);

  return (
    <div className="show">
      <div>
        <h2>Employee List</h2>
        <button onClick={() => setOpen(open + 1)}>
          {open > 0 ? "Refresh" : "Show the list"}
        </button>
      </div>
      {open > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th className="center">ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
              <th>Position</th>
              <th>Wage</th>
              <th className="center">Edit</th>
              <th className="center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map(({ id, name, age, country, position, wage }) => (
              <TRow
                key={id}
                id={id}
                name={name}
                age={age}
                country={country}
                position={position}
                wage={wage}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShowList;
