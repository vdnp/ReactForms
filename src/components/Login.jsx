import { useRef, useState } from "react";

export default function Login() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const emailIsValid = !emailValue.includes("@");
    const passwordIsValid = passwordValue.length <= 5;

    if (emailIsValid) {
      setEmailError(true);
      return;
    }

    if (passwordIsValid) {
      setPasswordError(true);
      return;
    }

    console.log("submit");
    setEmailError(false);
    setPasswordError(false);

    email.current.value = "";
    password.current.value = "";
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
          ref={email}
        />
        {emailError && (
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
          ref={password}
        />
        {passwordError && (
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
