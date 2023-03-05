import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';

const Signup = (props) => {
  const host = "http://localhost:5000";
  const navigate = useNavigate();

  const [userDetails, setuserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const handleSubmit = async (event) => {
    console.log(userDetails);
    event.preventDefault();
    const url = `${host}/auth/createUser`;
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        password: userDetails.password,
        email: userDetails.email,
        phoneNumber: userDetails.phoneNumber
      }),
    });
    const json = await response.json();
    console.log(json);
    // save authtoken to localStorage
    localStorage.setItem("notesToken", json.authToken);
    navigate("/");
    props.sendAlert("User Added Successfully", "success");
  };

  const onChange = (event) => {
    setuserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            firstName
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
            aria-describedby="firstName"
            value={userDetails.firstName}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            lastName
          </label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName"
            aria-describedby="lastName"
            value={userDetails.lastName}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userDetails.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={userDetails.password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="confirmPassword"
            value={userDetails.confirmPassword}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="phoneNumber"
            name="phoneNumber"
            className="form-control"
            id="phoneNumber"
            value={userDetails.phoneNumber}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
