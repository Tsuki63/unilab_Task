import { useEffect, useState } from "react";
import "./Api.css";
import Pagination from "../components/Pagination";

export default function API() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([users]);
  const usersPerPage = 5;
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentUsers(
      users.slice(
        currentPage * usersPerPage - usersPerPage,
        currentPage * usersPerPage
      )
    );
  }, [currentPage, users]);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  };

  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  return (
    <div className="api_background">
      <div className="api_container">
        {currentUsers.map((user) => (
          <div key={user.id} className="api_card">
            <h2>{user.title}</h2>
            <span>{user.body}</span>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          totalStudents={users.length}
          studentsPerPage={usersPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
