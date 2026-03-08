import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentsTable from './StudentsTable';
import './App.css';

// A simple root component that keeps a list of students
const App = () => {
  const [students, setStudents] = useState([]);

  // add a new student object to the list
  const addStudent = (student) => {
    const withId = { ...student, id: Date.now() };
    setStudents([...students, withId]);
  };

  // remove a student by id
  const deleteStudent = (id) => {
    // this is very basic – no confirmation dialog
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div>
      <h1>Student Record System</h1>
      <StudentForm onAdd={addStudent} />
      <StudentsTable students={students} onDelete={deleteStudent} />
    </div>
  );
};

export default App;
