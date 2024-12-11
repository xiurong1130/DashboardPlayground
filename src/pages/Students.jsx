import React, { useState } from 'react';

const Students = () => {
  const [studentName, setStudentName] = useState('');
  const [studentsList, setStudentsList] = useState([]);

  const handleInputChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleAddStudent = () => {
    if (studentName.trim() !== '') {
      setStudentsList([...studentsList, studentName]);
      setStudentName('');
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button>Students</button>
      <div>
        <input type="text" value={studentName} onChange={handleInputChange} placeholder="Enter student name" />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      <ul>
        {studentsList.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
};

export default Students;

