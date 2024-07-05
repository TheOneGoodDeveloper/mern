import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// page-routes
import Users from "./Components/Users";
import UpdateUsers from "./Components/UpdateUsers";
import CreateUsers from "./Components/CreateUsers";

function App() {
  return (
    <div>
    <ToastContainer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<CreateUsers />}></Route>
          <Route path="/update/:id" element={<UpdateUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
