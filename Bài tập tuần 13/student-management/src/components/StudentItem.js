import React from 'react';

const StudentItem = ({ student, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.class}</td>
            <td>{student.email}</td>
            <td>
                <button onClick={() => onEdit(student)}>Sửa</button>
                <button onClick={() => onDelete(student._id)}>Xóa</button>
            </td>
        </tr>
    );
};

export default StudentItem;