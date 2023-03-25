import Table from 'react-bootstrap/Table';
import { MDBBadge} from 'mdb-react-ui-kit';

function SprintIssueList() {
  return (
    <Table striped borderless hover size="sm">
      <thead>
        {/* <tr>
          <th>icon</th>
          <th>id</th>
          <th>description</th>
          <th>status</th>
          <th>assignee</th>
        </tr> */}
      </thead>
      <tbody>
        <tr>
          <td style={{textAlign:"center"}}>Drag your issues here</td>
          {/* <td>1</td>
          <td>Create wire frames</td>
          <td>
            <MDBBadge color='info' pill>
                <select name="question" id="question" style={{color:"black"}}>
                    <option value="ip" style={{color:"blue"}}>IN-PROGRESS</option>
                    <option value="td" style={{color:"grey"}}>TODO</option>
                    <option value="done" style={{color:"green"}}>DONE</option>
                </select>
            </MDBBadge>
          </td>
          <td>
            assignee icon
          </td> */}
        </tr>
        {/* <tr>
        <td>#</td>
          <td>2</td>
          <td>Create interim report</td>
          <td>dropdownlist</td>
          <td>assignee icon</td>
        </tr> */}
        {/* <tr>
        <td>#</td>
          <td>3</td>
          <td>Create presentation</td>
          <td>
            <MDBBadge color='info' pill>
                <select name="question" id="question" style={{color:"black"}}>
                    <option value="ip" style={{color:"blue"}}>IN-PROGRESS</option>
                    <option value="td" style={{color:"grey"}}>TODO</option>
                    <option value="done" style={{color:"green"}}>DONE</option>
                </select>
            </MDBBadge>
          </td>
          <td>assignee icon</td>
        </tr> */}
      </tbody>
    </Table>
  );
}

export default SprintIssueList;