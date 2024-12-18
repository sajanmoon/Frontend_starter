import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("sajanmoon@gmail.com");
  const [password, setPassword] = useState("Moon@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // we will make a API call with the help of axios
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      // Here in console log we are seeing what we got from api res
      console.log(res.data);
      // Here we have imported the addUser action from userSlice
      // with the help of addUser action we are storing all the data of api to our redux store
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title mx-auto">LOGIN HERE</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <div className="card-actions justify-center">
            <button onClick={handleLogin} className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
