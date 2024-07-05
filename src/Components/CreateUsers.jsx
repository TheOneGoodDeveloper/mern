import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreateUsers() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      age: age,
    };

    console.log(data);

    const result = await axios
      .post(`http://localhost:3001/create`, data)
      .then((result) => {
        console.log("Result", result);
        toast.success("successfully created")
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2 className="text-center">Add User</h2>
          <div className="form-row ">
            <div className="col mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="col mt-3">
              <label>Mail</label>
              <input
                type="mail"
                className="form-control"
                placeholder="mail"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="col mt-3">
              <label>Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              ></input>
            </div>
            <button className="btn btn-success mt-3">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUsers;
