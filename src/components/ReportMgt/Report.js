import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import {AiOutlineDropbox} from 'react-icons/ai';
import Linechart from './Chart';
import Home from './Table';
import BasicTable from './TableNew';

import "./Report.css"
import Chart1 from './Chart1';

const Report = () => {
  const [inactive, setInactive] = React.useState(false);

  return (
        <div className="mainReport">
        
          <form className='frmReportGen'>
            <div className='subTopicArea'>
              <span className='boxIcon'>
                <AiOutlineDropbox />
              </span>
              <h5 className='projectName'>Return0 Software project</h5>
              <div className='selectBoxes'>
                <select>
                  <option>Story Point</option>
                  <option>Issue Count</option>
                </select>
                <select>
                  <option>Spring 1</option>
                  <option>Spring 2</option>
                  <option>Spring 3</option>
                  <option>Spring 4</option>
                </select>
              </div>
            </div>
            <input type='submit' className='btnGenerate' value='Generate Report'/>
          </form>
          <div>
            <Chart1 />
            <Home />
          </div>
        </div>
  );
}

export default Report;