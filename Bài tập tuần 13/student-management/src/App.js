import axios from 'axios';
import { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({ name: '', age: '', class: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:5000/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error("Lỗi khi fetch danh sách:", error));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      axios.put(`http://localhost:5000/api/students/${currentStudent._id}`, currentStudent)
        .then(() => {
          fetchStudents();
          resetForm();
        })
        .catch(error => console.error("Lỗi khi cập nhật học sinh:", error));
    } else {
      axios.post('http://localhost:5000/api/students', currentStudent)
        .then(() => {
          fetchStudents();
          resetForm();
        })
        .catch(error => console.error("Lỗi khi thêm học sinh:", error));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentStudent({ ...currentStudent, [name]: value });
  };

  const handleEdit = (student) => {
    setCurrentStudent({ ...student });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/students/${id}`)
      .then(() => fetchStudents())
      .catch(error => console.error("Lỗi khi xóa học sinh:", error));
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setCurrentStudent({ name: '', age: '', class: '', email: '' });
    setIsEditing(false);
  };

  return (
    <div className="App">
      <h1>Quản lý học sinh</h1>
      <StudentForm
        student={currentStudent}
        onSubmit={handleFormSubmit}
        onChange={handleInputChange}
        onCancel={handleCancel}
        isEditing={isEditing}
      />
      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;