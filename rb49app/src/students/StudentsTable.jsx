import React from "react";
import students from "../assets/students.json";
import { useState } from "react";

function StudentsTable() {
  var [allstudents, setStudents] = useState(students);
  console.log(allstudents);
  return (
    <table border="2">
      {allstudents.map((student) => {
        return (
          <tr
            style={
              student.gender == "Male"
                ? { backgroundColor: "skyblue" }
                : { backgroundColor: "lightpink" }
            }
          >
            <td>
              <img
                width="50px"
                src={
                  student.gender == "Male"
                    ? "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
                    : "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png"
                }
              />
            </td>
            <td>{student.name}</td>
            <td>{student.gender}</td>
            <td>{student.age}</td>
            <td>{student.fatherName}</td>
            <td>{student.motherName}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default StudentsTable;
