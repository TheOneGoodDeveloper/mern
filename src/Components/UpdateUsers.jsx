import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";

function UpdateUsers() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const result = axios
      .get(`http://localhost:3001/update/${id}`)
      .then((result) => {
        console.log("Result", result);
        setName(result.data.data[0].name);
        setEmail(result.data.data[0].email);
        setAge(result.data.data[0].age);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // update

  const update = async (e)=>{
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      age: age,
    };

    console.log(data);

    const result = await axios
      .put(`http://localhost:3001/updateuser/${id}`, data)
      .then((result) => {
        console.log("Result", result);
        toast.success("successfully updated")
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={update}>
          <h2 className="text-center">Update User</h2>
          <div className="form-row ">
            <div class="col mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="col mt-3">
              <label>Mail</label>
              <input
                type="mail"
                class="form-control"
                placeholder="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="col mt-3">
              <label>Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              ></input>
            </div>
            <button className="btn btn-success mt-3">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUsers;
