import React from "react";
import students from "../assets/students.json";
import { useState } from "react";

function StudentsTable() {
  var [allstudents, setStudents] = useState(students);
  var [startIndex, setStartIndex] = useState(0);
  var [endIndex, setEndIndex] = useState(5);
  function sortByKey(key) {
    // var temp = allstudents.sort((a, b) => {
    //   if (a[key] > b[key]) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });
    setStudents(function (currentStudents) {
      currentStudents.sort((a, b) => {
        if (a[key] > b[key]) {
          return 1;
        } else {
          return -1;
        }
      });
      return [...currentStudents];
    });
  }

  function nextFive() {
    setStartIndex(startIndex + 5);
    setEndIndex(endIndex + 5);
  }

  return (
    <div>
      <button
        onClick={() => {
          nextFive();
        }}
      >
        Next 5
      </button>
      <table border="2">
        <thead>
          <tr>
            <th></th>
            <th
              onClick={() => {
                sortByKey("name");
              }}
            >
              Name
            </th>
            <th
              onClick={() => {
                sortByKey("gender");
              }}
            >
              Gender
            </th>
            <th
              onClick={() => {
                sortByKey("age");
              }}
            >
              Age
            </th>
            <th
              onClick={() => {
                sortByKey("fatherName");
              }}
            >
              Father name
            </th>
            <th
              onClick={() => {
                sortByKey("motherName");
              }}
            >
              Mother name
            </th>
          </tr>
        </thead>
        {allstudents.slice(startIndex, endIndex).map((student) => {
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
    </div>
  );
}

export default StudentsTable;
