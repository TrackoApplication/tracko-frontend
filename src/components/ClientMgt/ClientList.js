import React from 'react'
import { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import { useNavigate } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AddClient from './AddClient';



const ClientList = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <NavBar/>
    
    <div className =" h-12 m-4 ">
        {/* <button 
         onClick={<AddClient handleClose/>}
        // onClick = {() => navigate("/addClient")}
        className="rounded bg-[#231651] text-white px-6 py-2 font-semibold transition duration-700 hover:scale-105 ease-in-out">Add Client</button> */}
    <AddClient/>
    </div>
    
    <MDBTable align='middle '>
      <MDBTableHead>
        <tr>
          <th scope='col'> Client Name</th>
          <th scope='col'>Contact Person</th>
          <th scope='col'>Description</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
              src='data:image/png;base64,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'
               
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Creative Software</p>
                
              </div>
            </div>
          </td>
          <td>
            
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
            
          </td>
          <p>Employee performance mesuring system.System should mesure performance of all the employees</p>
         
            
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACACAMAAADTa0c4AAAAY1BMVEX/////YVpIKJD/9fX/amRTNZf08vj/fnjd1+rRyeNqUKT/4eD/xMG6rtWMeLn/19b/sKx1Xav/iIP/nJejk8deQp3/ko3/6+r/dG7o5PH/pqLGvNyYhsCvoc7/urf/zcuBa7Lu8RJUAAAKgElEQVR4nOVd6XriOgztTFgLhC1shVLe/ykHGiKfJF4k2aa93z1/h6SxIx8dbZm3Nx+W14/NZvDnjuNms5rPvD+W4XSuyvX67wPrdVlNRwnvnQazj/GfLgb7+SHBrUfncve3i93lnODWqXD4OPZW/8RmHnnvadlb/BPDcpLk6aOx3LtWX9vBqtDfe9F/94j1NN0ytDhsvMuvt0B578Dyf8MWFB/B5T9wXCruPXkPLv+B208S4tJ59rvYi8/BhbX8O4Y/R4e81/80AplXPPFef43yZ4yg6J/+42a1mi+X19VHrQdakPiD87C3yrv7r87Tc1WV/b15P2VbpRuHjuM/br9aZj67dpUBnwsX3QVWba6bXjr0OHy9R5y1X/H+y/Kbw6r9oy3z3u312/19Rx+8fAfa69+6FF/R3gLeDrTWP6xcB/xU/uAOFGjeY5+TazvKK+PerfXffKd7sv6xHcD1h472Eo0gzIRTXFTIw30iUbzQF2zNigZh94buIvjz01C0pAn8fM18+nh8gfmz4j3YsHFAEYGPKzm3HsEFFeeCBCgG7OU0gB348P6wEq6/vQMvooG9eP2tHfBR5km8/tYOvHOvicLSHGhBvgN2zfMrQ+uCAz0yquiTf5UeY9a77AIcp9sTGA+wk1C6YcLhCzzBnHmau5jRdUfnb8yrlJ1m4w1fwIPj8DrsWAVN4Kxex/p1JmAYQJzkoOSBiwVoGaID8IAhz+wsQHS+EV9q9s6uhswqFuJ7k/vciS+VodAbwNsbKUJ7UHSJWMSIeDCzFpiHzJh18cD6zzu9AcDuXRQXC0DuXJXvP/rMZxJFZKcI85GAVLAq2U+hsS2CJF/G1oAtkB7MegbIme/jLrcx6K1ZgS7LS/uX1Q9cmxVwMhsWkAFZ/o1oTHfrU5wBMUE2rKl0vAGF9B0hLUAb1jccmjUi2njeIAekBvs5VIoDtGr2FmdBPDQ0rnGCD5AW6rMgnWGNE3yAtFDOIoFeBtaYuTeAnl9b7jzH3oADv5QT3KDvRaJf4PSVG6AteHtMiLL82lv/1zdgHbsBk//7BrzUAmTJIMsN+htwyb4BSu1yDzWNuo71AoV7B4kEtVo+sAHFWKve3tZDcs2xG+DRAdFucOG9waNAN9C1az1sswmyKSGofEjKCPRjCXp+bTBDO2j7x6tev9UP9izTkRRWtoF6YgmyYG0w42HRoolBFPqlybkPvw2LtLyy/5EsqF9SGTXPrw1mmuv7wdSBU5NwAOpOjzCdTFgnBYkDbTkxyojppCBZkCUnBoU5qelSiFU3IBx8KwiD9s+WTyEpqIuGLp7LoSx1lBEhFGvr+1JWz9YTFASlA2z5FGJBXULAa0DQ0SNyYNCt8TQsMibNGTA5dVtV1ZQFNGeAYkE7hUBLg0DEQbdGc9sv7xoCIAq1V9WIbjR+gHyAw4uawhzfeIEATaaabEluAqaxwp5R/Oz/NTaMrbrMx9TnGV09NaANzchT0/QlNoFV4FJyhIriBhmAk0AK09fM7OuAdjUwK/ID4sy4MQDXlaVlw3kwdWW3CwEiZD36xKy/dSZNy5cwttgHLzR2LHQEpjLoqwuZzgZOOD8CAmwdSVPjlblUQ59uR2Q6ZGQBgVErXg0BPZvhl2eeZdihFWMCkkNwGDD+OLhdySEwDSKBwqB59GB7E4wrdCtVptdFkBgCLebbttK57R5M3c/afQo2ERpSsdQpwJLYsQU4Id/eOw+eB9AsGqQOeHleN+6/J+wjdwcgGvFXFaH5l7kD8KwMq5mzHgQUkLVbx/AgbwcKGKwLSfEb7ADnFEyhWZgTRbECw04I2AfoSoYixNmSYFYKuh6fOQgvsF2cp6DH4Wf5DO8pzkqG+qW/oF2eoUKx/ztUKB2BvXCPDHY6238BpOrc09bAhHcwsmjNlXIOTGtg4t1nBK3RKnZrXYgILSGgBa0d+HN0LawzMsOjzPbIUOliginOi0gGRq7+B4IQ0EdC7R24b4HlQHWHprhOszM0drNZwaK1fNnAjCFCy5GEENBPQUV3Kq4zLN8fm+MnJLtjc7tL61lG57IzV/guip58GTJ7CGi/TX9q/DE4+bVczm2DkwNJ7DTpD06+l1U1nU7tg5PCBMLBmSGDEPAWvs+qu0gPeLM1hJFkdFaePgAl08qQgRNmbSp/eFpeTa08K25BNTztyJBBCMg7VAXPCLyThS5M1p5VGygnp60ZMggB2bn5g//7Ed9/QfsZjZwfUAAipMAQQkDJqVpuPYu/E+P1d35Cw5IhMwYgzEgdVk4u2P/ej6hAqaAJDBveUaSlHZ/RiXj5hNHC9hmdMv67EcBfDUc9VYBuZ4vlarupk06DDB9Suq3rbditb9U5TS+kJUP2vQMvGb77DbBlyKbDfN3W2h5YBrY6qgEipMBwss41eFblG3C/x3dbFd1AhiyWrYN4pBkYKR4NviN8odZ+AhK8KTnLgme+N8dk5/MoD1QtC0CEKVyWG03yKsMJIyGmad8MZ8jSAIo3qYea4BxrujYgQ6bufw0DwuzUU10Q2+taQV9BhJjrTs0CoECVLdzeDFkaQPY69ZdOgMbVZ1jdQ8YFFBpSj7dDRCP5nkUb7gxZGiABJBYCwOG6xr0akCFTT0K4gQSQerIZvlCkHmN64JpkHx2AgD71TCMEtPwP2iAoqsxIhJBoFzQ9sIBVatVjV5T6tGXI0gAz/Im/fYl9CqpZ5nt4QrMgB0tgmAIj6aexBIB0rGqYva6CNrrEkiFLASSAxB4QiEsVxzTvpnkvlgxZPLDIl1gCz2IlcNl9M8w+Jgnw23iJE21FrATuV0GRCBM9JRDALdEtG+AX+jTXgzojdW7LkEUBKk3iTyMFECuBoR8PHi1xYAiVptQS+BArgaENBLkpaYYMCSBjDKwyVmcVNGWGDAggdQwcK4GBADvRCYir2MAQNjl1DBwrgX2NsECEcRky/DpuagkMBKARbRCeWrg5ERECy+aMgVUSONAImyYwhO6O1DFwrATuzUJ2kSJDBn8k9SevIY2tksDhNpBCOFxkARJA4pIoxsAaljoxpgtUIyEIJIDUMXCkBLbOQvYARKiSWUAAqSUwPJpKAltnIfuII0Ls8MsYA2ucFGMS4BtRGTLMgqduNomUwJxJgBoRGTLMgt8UD+kDxCoaDzViTQLUALUpFFtQBstYBlJJYBYBNgC5IfK2OMSTsQykkcBMAmwAGTKBtSEBpI6BQQJrIjUIAVnaRJUhQwLIWAbSSGAIAZnaRJMhQwLIWAZSSGCcBOBeA5zD9LmYBc9YBtJIYJgE4FMzGB2LdCcZY2AoA2kkMKRnJNRs/irH7WIZLGcZSCGBIQQUaTNZhgzcTPIYOE4CywnQ8oeDBw8JIHUMHCeB8f+hkVomP0OGBHCTP6QXEANrJDDkwOSuycjvQGAIBJCxDKSRwCBONdrU6C9vYIhloIytkAoJDCGgKjgFIvRmyBZ0BFJLYBhRjZPAyuyUyZD5HfDkqbUy/Kdv16cN6MpVDTupXXNDhCH+HX2rrSz/08/zIxTKFrbaC0Ro8y3X/16UPMPAiuOJnSgjH2zMTQ6eh9n+k5flMaZtYxGXnSsGtQf4B/jidOHYM6YYAAAAAElFTkSuQmCC'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>99x</p>
                
              </div>
            </div>
          </td>
          <td>
           
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p>Project Management System</p>
          </td>
          
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://wso2.cachefly.net/wso2/sites/images/brand/downloads/wso2-logo.png'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>wso2</p>
                
              </div>
            </div>
          </td>
          <td>
           
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p>Employee efficiency monitoring system</p>
          </td>
          
        </tr>
      </MDBTableBody>
    </MDBTable>


    </>
  )
}

export default ClientList