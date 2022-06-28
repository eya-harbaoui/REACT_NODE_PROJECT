import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState();
  const [date, setDate] = useState();

  return (
    <React.Fragment>
      <div className="formulaire">
        <form>
          <fieldset>
            <table>
              <tr>
                <td>
                  <label htmlFor="firstname">FirstName:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={firstname}
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lastname">LastName:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="date">Date of birth:</label>
                </td>
                <td>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email:</label>
                </td>
                <td>
                  <input
                    type="email"
                    id="email"
                    name="lastname"
                    placeholder="example@example.tn"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="number">Phone Number:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={number}
                    required
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="gender">Gender:</label>
                </td>
                <select name="gender">
                  <option value="male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </tr>

              <tr>
                <td>
                  <label htmlFor="password">Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    required
                  />
                </td>
              </tr>
            </table>
          </fieldset>

          <input type="submit" value="submit" id="submit"></input>
          <input type="reset" value="reset" id="reset"></input>
        </form>
      </div>
    </React.Fragment>
  );
}

export default App;
