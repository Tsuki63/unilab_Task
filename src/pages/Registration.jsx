import { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    photo: "",
    name: "",
  });

  const getBase64 = (file) => {
    if (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    }
  };
  const handleChange = async (e) => {
    const changedField = e.target.name;
    let newValue = "";
    if (changedField === "name") {
      newValue = e.target.value;
    } else if (changedField === "photo" && e.target.files[0]) {
      newValue = await getBase64(e.target.files[0]);
    }

    setUser((curState) => {
      return { ...curState, [changedField]: newValue };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/form", { replace: true });
  };

  return (
    <div className="registrationWraper">
      <div className="registrationContainer">
        <h1>Get Started</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="photo">
            <p>add a photo</p>
          </label>
          <input type="file" name="photo" id="photo" onChange={handleChange} />

          <label className="registrationForImage" htmlFor="photo">
            <img
              src={
                user.photo
                  ? user.photo
                  : "/assets/add_a_photo_FILL0_wght400_GRAD0_opsz48 1.png"
              }
              alt=""
              className={user.photo ? "userPhoto" : null}
            />
          </label>

          <label htmlFor="name">
            <p>fill in your name</p>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            placeholder="your name"
            onChange={handleChange}
          />
          <button disabled={!(user.photo && user.name)}>Sign in</button>
        </form>
      </div>
    </div>
  );
}
