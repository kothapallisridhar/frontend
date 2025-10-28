import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { useAddNewLeadMutation } from "../../services/leadsApi";

function AddLead() {
  var [addLeadFn] = useAddNewLeadMutation();
  var leadForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      courseInterested: "",
      status: "New",
    },
    onSubmit: (values) => {
      addLeadFn(values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <div className="border border-3 p-3 m-2 border-success">
      <h1>AddLead</h1>
      <form onSubmit={leadForm.handleSubmit}>
        <input type="text" {...leadForm.getFieldProps("name")} />
        <br />
        <input type="text" {...leadForm.getFieldProps("email")} />
        <br />
        <input type="text" {...leadForm.getFieldProps("phone")} />
        <br />
        <input type="text" {...leadForm.getFieldProps("courseInterested")} />
        <br />
        <button className="btn btn-success mt-1">Add Lead</button>
      </form>
    </div>
  );
}

export default AddLead;
