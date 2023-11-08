import Table from "../components/Table";
import "./Form.css";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Data from "../../Data";
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp";

export default function Form() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState({});
  const [students, setStudents] = useState(Data);
  const [displayFilter, setDisplayFilter] = useState(false);
  const [filters, setFilters] = useState({
    active: true,
    inactive: true,
    male: true,
    female: true,
  });
  const [limitedStudents, setLimitedStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 7;
  let totalStudents = students.length;
  useEffect(() => {
    setLimitedStudents(() =>
      students.slice(
        (currentPage - 1) * studentsPerPage,
        currentPage * studentsPerPage
      )
    );
  }, [currentPage, students]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  useEffect(() => {
    setStudents(
      Data.filter(
        (studentInfo) => filters[studentInfo.sex] && filters[studentInfo.status]
      )
    );
    console.log(Data);

    setCurrentPage(1);
  }, [filters]);
  const toggleFilters = () => {
    setDisplayFilter((curState) => !curState);
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const navigateToApi = () => {
    navigate("/api", { replace: true });
  };

  return (
    <div className="formWrapper">
      {popup ? <PopUp setPopup={setPopup} /> : null}
      <div className="formContainer">
        <nav>
          <div className="leftNav">
            <h2>Form</h2>
            <h2 onClick={navigateToApi}>API</h2>
          </div>
          <div className="rightNav">
            <h2>{user.name}</h2>
            <img onClick={() => setPopup(true)} src={user.photo} alt="" />
          </div>
        </nav>
        {displayFilter ? (
          <Filter filters={filters} setFilters={setFilters} />
        ) : null}

        <div className="formBody">
          <div className="formBodyFilter">
            <button onClick={toggleFilters}>filter</button>
            <input type="search" />
          </div>
          <Table limitedStudents={limitedStudents} />
          <Pagination
            totalStudents={totalStudents}
            studentsPerPage={studentsPerPage}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}
