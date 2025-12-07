import React from 'react';

const StudentForm = ({ student, onSubmit, onChange, onCancel, isEditing }) => {
    return (
        <form onSubmit={onSubmit}>
            <h3>{isEditing ? 'Chỉnh sửa học sinh' : 'Thêm học sinh mới'}</h3>
            <div>
                <label>Tên: </label>
                <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={onChange}
                    required
                />
            </div>
            <div>
                <label>Tuổi: </label>
                <input
                    type="number"
                    name="age"
                    value={student.age}
                    onChange={onChange}
                    required
                />
            </div>
            <div>
                <label>Lớp: </label>
                <input
                    type="text"
                    name="class"
                    value={student.class}
                    onChange={onChange}
                    required
                />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={onChange}
                    required
                />
            </div>
            <button type="submit">
                {isEditing ? 'Cập nhật' : 'Thêm'}
            </button>
            {isEditing && (
                <button type="button" onClick={onCancel}>
                    Hủy
                </button>
            )}
        </form>
    );
};

export default StudentForm;