import { useState } from "react";

export default function Login() {
  // const [newEmail, setnewEmail] = useState("");
  // const [newPassword, setnewPassword] = useState("");

  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState(initialValues);
  const [isEdited, setIsEdited] = useState({ email: false, password: false });

  // const emailIsValid = values.email !== "" && !values.email.includes("@");
  // const passwordIsValid = values.password !== "" && values.password.length <= 5; validation on keyPress

  const emailIsValid = isEdited.email && !values.email.includes("@");
  const passwordIsValid = isEdited.password && values.password.length <= 5;

  function handleInputBlur(e) {
    const name = e.target.name;

    setIsEdited((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });

    setIsEdited((prev) => ({
      ...prev,
      [name]: false,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onBlur={handleInputBlur}
          value={values.email}
          onChange={handleInputChange}
        />
        {emailIsValid && (
          <div className="invalid-feedback d-block">Enter Valid Email</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onBlur={handleInputBlur}
          value={values.password}
          onChange={handleInputChange}
        />
        {passwordIsValid && (
          <div className="invalid-feedback d-block">
            Password must be at least 5 character.
          </div>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
