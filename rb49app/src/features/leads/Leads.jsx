import React from "react";
import {
  useDeleteLeadMutation,
  useGetAllLeadsQuery,
  useLazyGetAllLeadsQuery,
} from "../../services/leadsApi";
import { Link } from "react-router-dom";

function Leads() {
  var { isLoading, data } = useGetAllLeadsQuery();
  var [deleteLeadFn] = useDeleteLeadMutation();
  var [getAllLeadsFn] = useLazyGetAllLeadsQuery();
  function deleteLead(id) {
    deleteLeadFn(id)
      .then((res) => {
        getAllLeadsFn();
        alert("Deleted, success!");
      })
      .catch((err) => {
        //console.log(err);
        alert("Someting went wrong!" + JSON.stringify(err));
      });
  }
  console.log(data);
  return (
    <div className="border border-3 border-warning m-2 p-3">
      {isLoading && <b>Loading...</b>}
      <div className="d-flex justify-content-between align-items-center">
        <h1>Leads</h1>
        <Link className="btn btn-success" to="/addlead">
          <i class="bi bi-plus-circle"></i> Add Lead
        </Link>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Status</th>
            <th>Time</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data?.map((lead) => {
              return (
                <tr>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.courseInterested}</td>
                  <td>{lead.status}</td>
                  <td>{lead.createdAt}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteLead(lead["_id"]);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Leads;
