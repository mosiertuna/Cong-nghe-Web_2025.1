import React from 'react';
import StudentItem from './StudentItem';

const StudentList = ({ students, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Họ tên</th>
                    <th>Tuổi</th>
                    <th>Lớp</th>
                    <th>Email</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <StudentItem
                        key={student._id}
                        student={student}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default StudentList;