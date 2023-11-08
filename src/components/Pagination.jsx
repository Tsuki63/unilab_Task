import "./Pagination.css";

export default function Pagination({
  studentsPerPage,
  currentPage,
  totalStudents,
  paginate,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <div className="page_item">
        {pageNumbers.map((number) => (
          <span
            onClick={() => paginate(number)}
            className={
              currentPage === number ? "page_link curpage" : "page_link"
            }
          >
            {number}
          </span>
        ))}
      </div>
    </nav>
  );
}
