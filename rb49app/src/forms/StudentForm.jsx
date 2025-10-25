import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const StudentForm = () => {
  const studentForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      techs: [],
      country: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("First Name is mandatory")
        .min(3, "first name should be min 3 letters"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="border border-2 border-secondary m-1 p-1">
      <h1>StudentForm</h1>
      <p>{JSON.stringify(studentForm.errors)}</p>
      <form onSubmit={studentForm.handleSubmit}>
        <input
          type="text"
          name="firstname"
          onChange={studentForm.handleChange}
          onBlur={studentForm.onBlur}
        />
        <div>
          {studentForm.errors.firstname && <div>Firstname is mandatory</div>}
        </div>
        <br />
        <input
          type="text"
          name="lastname"
          onChange={studentForm.handleChange}
        />
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={studentForm.handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={studentForm.handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="others"
          onChange={studentForm.handleChange}
        />
        Others
        <br />
        <b>Technologies</b>
        <input
          type="checkbox"
          name="techs"
          value="react"
          onChange={studentForm.handleChange}
        />
        ReactJs
        <input
          type="checkbox"
          name="techs"
          value="angular"
          onChange={studentForm.handleChange}
        />
        Angular
        <input
          type="checkbox"
          name="techs"
          value="nodejs"
          onChange={studentForm.handleChange}
        />
        NodeJS
        <input
          type="checkbox"
          name="techs"
          value="bootstrap"
          onChange={studentForm.handleChange}
        />
        Bootstrap
        <input
          type="checkbox"
          name="techs"
          value="java"
          onChange={studentForm.handleChange}
        />
        Java
        <br />
        <b>Country</b>
        <select name="country" onChange={studentForm.handleChange}>
          <option value="" disabled selected>
            Select Country
          </option>
          <option value="India">India</option>
          <option value="Sweden">Sweden</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Swiss">Swiss</option>
        </select>
        <button type="submit">Show Student</button>
        <button onClick={studentForm.resetForm} type="reset">
          Clear Form
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
