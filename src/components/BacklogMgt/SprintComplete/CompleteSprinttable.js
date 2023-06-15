import Table from "react-bootstrap/Table";
import { MDBBadge } from "mdb-react-ui-kit";

// this table used for testing purposes
function CompleteSprinttable() {
  return (
    <Table striped borderless hover size="sm">
      <thead></thead>
      <tbody>
        <tr>
          <td>#</td>
          <td>1</td>
          <td>Create wire frames</td>
          <td>
            <MDBBadge color="info" pill>
              <select name="question" id="question" style={{ color: "black" }}>
                <option value="ip" style={{ color: "blue" }}>
                  IN-PROGRESS
                </option>
                <option value="td" style={{ color: "grey" }}>
                  TODO
                </option>
                <option value="done" style={{ color: "green" }}>
                  DONE
                </option>
              </select>
            </MDBBadge>
          </td>
          <td>assignee icon</td>
        </tr>
        <tr>
          <td>#</td>
          <td>2</td>
          <td>Create interim report</td>
          <td>
            <MDBBadge color="info" pill>
              <select name="question" id="question" style={{ color: "black" }}>
                <option value="ip" style={{ color: "blue" }}>
                  IN-PROGRESS
                </option>
                <option value="td" style={{ color: "grey" }}>
                  TODO
                </option>
                <option value="done" style={{ color: "green" }}>
                  DONE
                </option>
              </select>
            </MDBBadge>
          </td>
          <td>assignee icon</td>
        </tr>
        <tr>
          {/* <td>#</td>
          <td>3</td>
          <td>Create presentation</td>
          <td>dropdownlist</td>
          <td>assignee icon</td> */}
        </tr>
      </tbody>
    </Table>
  );
}

export default CompleteSprinttable;
