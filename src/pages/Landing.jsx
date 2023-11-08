import { useNavigate } from "react-router-dom";
import "./Landing.css";
export default function Landing() {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/registration", { replace: true });
  };
  return (
    <div className="landingWraper">
      <div className="landingContainer">
        <img src="/assets/pngegg 1.png" alt="" />
        <h1>Get Started Today</h1>
        <button onClick={navigateTo}>Get Started</button>
      </div>
    </div>
  );
}
