import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
const Login = (props) => {
  const host = "http://localhost:5000";
  const navigate = useNavigate();

  const [userDetails, setuserDetails] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `${host}/auth/login`;
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userDetails.email,
        password: userDetails.password,
      }),
    });
    const json = await response.json();
    if(json.success){
      // save authtoken to localStorage
      localStorage.setItem('notesToken', json.authToken);
      navigate("/");
      props.sendAlert("Logged in Successfully", "success");
    } else{
      props.sendAlert("Please enter correct details.", "danger");
    }
  };

  const onChange = (event) => {
    setuserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  return (
    <>
    <h2 className="mt-5 mb-3"> Login into Notes : </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
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
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
