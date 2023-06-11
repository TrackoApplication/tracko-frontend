import React from "react";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

export const TeamSummary = () => {
  return (
    <>
      <div>TeamSummary</div>
      <div className="table-container border my-2 ">
        <table className="table center ">
          <thead className="header bg-gray-100 ">
            <tr className="text-xs">
              <th scope="col" className="py-0 ">
                Team Name
              </th>
              <th scope="col" className="py-0">
                Scrum Master Name
              </th>
              <th scope="col" className="py-0">
                No. of Team Members
              </th>
              <th scope="col" className="py-0">
                Total invloved Issues
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="col-3">
                <p className="col-9 text-justify">Team A</p>
              </td>

              <td>
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  Jhon wick
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  5
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  100
                </p>
              </td>
            </tr>
            <tr>
              <td className="col-3">
                <p className="col-9 text-justify">Team B</p>
              </td>

              <td>
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  Jhon doi
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  5
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  90
                </p>
              </td>
            </tr>
            <tr>
              <td className="col-3">
                <p className="col-9 text-justify">Team C</p>
              </td>

              <td>
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  peter
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  6
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  98
                </p>
              </td>
            </tr>
            <tr>
              <td className="col-3">
                <p className="col-9 text-justify">Team D</p>
              </td>

              <td>
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  peter
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  5
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  109
                </p>
              </td>
            </tr>
            <tr>
              <td className="col-3">
                <p className="col-9 text-justify">Team E</p>
              </td>

              <td>
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  west
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  5
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  76
                </p>
              </td>
            </tr>
            <tr>
              <td className="col-3">
                <p className="col-9 text-justify">Team F</p>
              </td>

              <td>
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  Jhon wick
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  5
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  100
                </p>
              </td>
            </tr>
            <tr>
              <td className="col-3">
                <p className="col-9 text-justify">Team G</p>
              </td>

              <td>
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  Jhon wick
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  5
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  100
                </p>
              </td>
            </tr>
            <tr>
              <td className="col-3">
                <p className="col-9 text-justify">Team H</p>
              </td>

              <td>
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  mohi
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  7
                </p>
              </td>
              <td className="col-3 ">
                <p className=" col-9 text-justify" style={{ fontSize: "10px" }}>
                  89
                </p>
              </td>
            </tr>
          </tbody>
        
        </table>
      </div>
    </>
  );
};
