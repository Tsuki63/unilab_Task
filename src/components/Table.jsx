import "./Table.css";
export default function Table({ limitedStudents }) {
  console.log(limitedStudents);
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>სტუდენტის სახელი და გვარი</th>
            <th>სტატუსი</th>
            <th>სქესი</th>
            <th>ქულა</th>
            <th>პირადი ნომერი</th>
            <th>მაილი</th>
            <th>მობილურის ნომერი</th>
            <th>მისამართი</th>
            <th>დაბადების თარიღი</th>
          </tr>
        </thead>
        <tbody>
          {limitedStudents.map((student) => (
            <tr>
              <td>{student.name}</td>
              <td>{student.status}</td>
              <td>{student.sex}</td>
              <td>{student.score}</td>
              <td>{student.ID}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.address}</td>
              <td>{student.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
