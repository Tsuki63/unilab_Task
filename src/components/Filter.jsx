import { useState } from "react";
import "./Filter.css";
export default function Filter({ filters, setFilters }) {
  const [displayFilters, setDisplayFilters] = useState({
    status: false,
    sex: false,
  });
  const toggleFilters = (key) => {
    setDisplayFilters((curState) => {
      return { ...curState, [key]: !curState[key] };
    });
  };

  const handleChange = (e) => {
    const filterValue = e.target.checked;
    const key = e.target.id;
    setFilters((curState) => {
      return { ...curState, [key]: filterValue };
    });
  };
  return (
    <div className="filterWindow">
      <ul>
        <li>
          <span onClick={() => toggleFilters("status")}>სტუდენტის სტატუსი</span>
          <ul
            className={
              displayFilters.status ? "filter_status open" : "filter_status"
            }
          >
            <li>
              <input
                type="checkbox"
                id="active"
                onChange={handleChange}
                checked={filters.active}
              />
              <label htmlFor="active">ACTIVE</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="inactive"
                onChange={handleChange}
                checked={filters.inactive}
              />
              <label htmlFor="inactive">INACTIVE</label>
            </li>
          </ul>
        </li>
        <li>
          <span onClick={() => toggleFilters("sex")}>სქესი</span>
          <ul className={displayFilters.sex ? "filter_sex open" : "filter_sex"}>
            <li>
              <input
                type="checkbox"
                id="male"
                onChange={handleChange}
                checked={filters.male}
              />
              <label htmlFor="male">male</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="female"
                onChange={handleChange}
                checked={filters.female}
              />
              <label htmlFor="female">female</label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
