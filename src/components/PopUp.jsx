import { useNavigate } from "react-router-dom";
import "./PopUp.css";

export default function PopUp({ setPopup }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };
  return (
    <div className="popUp_background">
      <div className="popUp_container">
        <button className="popUp_logout" onClick={logout}>
          Log Out
        </button>
        <button className="popUp_close" onClick={() => setPopup(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
