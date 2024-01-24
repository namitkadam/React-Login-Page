import { useState, useEffect } from "react";

export default function From() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const ragex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.passwords = "Password is required";
    }
    return errors;
  };
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    return (
      <>
        <div className="msg">Signed in successfully</div>
      </>
    );
  }

  return (
    <>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="msg">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form className="Wrapper" onSubmit={submitForm}>
        <h1 className="HeadingTitle">Login Form</h1>
        <div className="form-Wrapper">
          <div className="Flex">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="Intput"
              value={formValues.username}
              onChange={handleChange}
            ></input>
            <p>{formErrors.username}</p>
          </div>
          <div className="Flex">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="Intput"
              value={formValues.email}
              onChange={handleChange}
            ></input>
            <p>{formErrors.username}</p>
          </div>
          <div className="Flex">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="Intput"
              value={formValues.password}
              onChange={handleChange}
            ></input>
            <p>{formErrors.username}</p>
          </div>
          <button className="BtnSumbmit">Submit</button>
        </div>
      </form>
    </>
  );
}
