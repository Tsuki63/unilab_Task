import { useState } from "react";

import "./App.css";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Form from "./pages/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import API from "./pages/API";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/form" element={<Form />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
