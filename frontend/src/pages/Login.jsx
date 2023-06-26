import { useContext, useState } from "react";
import axios from "axios";
import UserExport from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const {user, setUser} = useContext(UserExport.UserContext);

const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  axios
  .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {email, password})
  .then(res => {
    
    if(res.data.user_role === "admin") {
      setUser(res.data);

      setTimeout(() => {
        navigate("/private/p");
      }, 500);
    } else {
      navigate("/public");
    }

  })
  .catch(err => console.error(err))
}

  return (
    <div id="LoginContainer">
      <h1>Login</h1>

     <form onSubmit={handleSubmit}>

      <input 
      type="text"
      placeholder="email"
      name="email"
      onChange={e => setEmail(e.target.value)}
      />
      
      <input 
      type="password"
      placeholder="password"
      name="password"
      onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">SUBMIT</button>
     </form>
    </div>
  );
}

export default Login;
