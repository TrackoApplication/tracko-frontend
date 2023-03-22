import React, { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import './Issuetable.css';
import IssueService from "../../Services/IssueService";
import { MDBBadge} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { textAlign } from "@mui/system";

function Emptybacklog() {
  const [loading, setloading] = useState(true)
  const [issues, setissues] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try{
        const response = await IssueService.getIssues();
        setissues(response.data)
      } catch(error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, [])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <Table striped borderless hover size="sm">
      <thead>
        <th>Issue Id</th>
        <th>Summary</th>
        <th>Epic Name</th>
        <th>Status</th>
        <th>Assignee</th>
        <th>Actions</th>
      </thead>

      {!loading && (
        <tbody>
          {issues.map((issues) => (
            <tr>
            <td>{issues.issueId}</td>
            <td>{issues.summary}</td>
            <td>{issues.epicName}</td>
            <td>
              <MDBBadge color='info' pill>
                  <select name="question" id="question" style={{color:"black"}}>
                      <option value="ip" style={{color:"blue"}}>IN-PROGRESS</option>
                      <option value="td" style={{color:"grey"}}>TODO</option>
                      <option value="done" style={{color:"green"}}>DONE</option>
                  </select>
              </MDBBadge>      
            </td>
            <td>{issues.assignee}</td>
            <td>
              #
            </td>
          </tr>
          ))}
      </tbody>
      )}
    </Table>
  );
}

export default Emptybacklog;