"use client";
import React, { useState, useEffect } from "react";
import { createGroup } from "../../api/group/route"; // Import the createGroup function from the API route file

const FormPage = () => {
  const [groupName, setGroupName] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch teachers from the API
    fetch("/api/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error("Error fetching teachers:", error));

    // Fetch students from the API
    fetch("/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createGroup({ groupName, selectedTeacher, selectedMembers });
      alert("Group created successfully!");
    } catch (error) {
      console.error("Error creating group:", error);
      alert("Failed to create group.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Group Name:</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>
      <div>
        <label>Teacher:</label>
        <select
          value={selectedTeacher}
          onChange={(e) => setSelectedTeacher(e.target.value)}
        >
          <option value="">Select a teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher._id} value={teacher.name}>
              {teacher.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Members:</label>
        <select
          multiple
          value={selectedMembers}
          onChange={(e) =>
            setSelectedMembers(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {students.map((student) => (
            <option key={student._id} value={student.name}>
              {student.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Create Group</button>
    </form>
  );
};

export default FormPage;
