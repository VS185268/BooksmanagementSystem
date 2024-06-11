import "./styles.css";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  const handleRegisterbtn = () => {
    navigate("/register");
    console.log("Register is clicked");
  };
  const handleLoginbtn = () => {
    navigate("/login");
    console.log("Login is clicked");
  };

  return (
    <>
      <div
        className="Main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh",
        }}
      >
        <h1 className="text">Welcome To Books Management System</h1>
      </div>
      <br></br>
      <br></br>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignmentBaseline: "auto",
          justifyContent: "center",
          gap: "2rem",
          height: "5vh",
        }}
      >
        <label>
          <h2>Register </h2>
        </label>

        <button type="button" className="bt2" onClick={handleRegisterbtn}>
          Register
        </button>
      </div>
      <br></br>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          height: "5vh",
          marginRight: "2rem",
        }}
      >
        {" "}
        <label>
          <h2>Login </h2>
        </label>
        <button type="button" className="bt1" onClick={handleLoginbtn}>
          Login
        </button>
      </div>
    </>
  );
}
