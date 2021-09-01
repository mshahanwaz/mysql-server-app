import axios from "axios";
import { useState } from "react";

function TRow({ id, name, age, country, position, wage }) {
  const [editing, setEditing] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    id,
    name,
    age,
    country,
    position,
    wage,
  });

  const editEmployee = async () => {
    await axios
      .put("http://localhost:3001/update", newEmployee)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
    // console.log(newEmployee);
    setEditing(false);
  };

  const deleteEmployee = async () => {
    await axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log("ffff", err.message));
  };

  return (
    <tr>
      <td className="center">{id}</td>
      <td>
        {editing ? (
          <input
            type="text"
            value={newEmployee.name}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, name: e.target.value })
            }
          />
        ) : (
          `${newEmployee.name}`
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="number"
            value={newEmployee.age}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, age: e.target.valueAsNumber })
            }
          />
        ) : (
          newEmployee.age
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            value={newEmployee.country}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, country: e.target.value })
            }
          />
        ) : (
          newEmployee.country
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            value={newEmployee.position}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, position: e.target.value })
            }
          />
        ) : (
          newEmployee.position
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="number"
            value={newEmployee.wage}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, wage: e.target.valueAsNumber })
            }
          />
        ) : (
          newEmployee.wage
        )}
      </td>
      <td className="center">
        {editing ? (
          <button onClick={editEmployee}>Update</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
      </td>
      <td className="center">
        <button onClick={deleteEmployee}>Delete</button>
      </td>
    </tr>
  );
}

export default TRow;
