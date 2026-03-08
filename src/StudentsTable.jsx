import React from 'react';

// very minimal table component
function StudentsTable({ students, onDelete }) {
  if (students.length === 0) {
    return <p>No students yet, add one above.</p>;
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll</th>
          <th>Email</th>
          <th>Grade</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.rollNumber}</td>
            <td>{s.email}</td>
            <td>{s.grade}</td>
            <td><button onClick={() => onDelete(s.id)}>Del</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentsTable;
