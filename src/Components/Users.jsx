import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Users() {
  const navigate = useNavigate();
  const [users, setusers] = useState([]);

  const Submit = async () => {
    const result = await axios.get(`http://localhost:3001/view`);
    setusers(result.data.data);
    console.log("Result", result);
  };
  useEffect(() => {
    Submit();
  }, []);

  const deleteuser = async (id) => {
    const result = await axios
      .delete(`http://localhost:3001/deleteuser/${id}`)
      .then((result) => {
        // console.log(result);
        // window.location.reload();
        toast.success("user is deleted");
        navigate("/");
        Submit();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn bg-success">
          Create
        </Link>
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <table className=" table">
            <thead className="text-center">
              <tr Scope="row">
                <th>ID</th>
                <th>users</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users ? (
                users.map((user, index) => {
                  return (
                    <tr scope="row" key={index}>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center">{user.name}</td>
                      <td className="text-center">{user.email}</td>
                      <td className="text-center">{user.age}</td>
                      <td className="text-center">
                        <Link
                          to={`/update/${user._id}`}
                          className="btn bg-primary"
                        >
                          update
                        </Link>
                        <button
                          onClick={(e)=>deleteuser(user._id)}
                          className="btn bg-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="textcenter">no data found</tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
