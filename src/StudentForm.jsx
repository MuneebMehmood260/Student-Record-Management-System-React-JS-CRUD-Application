import React, { useState } from 'react';

// very basic form with controlled inputs and no validation
function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('A');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, rollNumber: roll, email, grade });
    // clear fields
    setName('');
    setRoll('');
    setEmail('');
    setGrade('A');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>NAME</label>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>ROLL</label>
        <input value={roll} onChange={e => setRoll(e.target.value)} />
      </div>
      <div>
        <label>EMAIL</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>GRADE</label>
        <select value={grade} onChange={e => setGrade(e.target.value)}>
       <option>A+</option>
       <option>A</option>
       <option>B+</option>
       <option>B</option>
       <option>C</option>
       <option>D</option>
       <option>F</option>
        </select>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default StudentForm;
