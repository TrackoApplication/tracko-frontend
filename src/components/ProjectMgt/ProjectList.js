import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/Navbar';
// link.rel = 'ProjectList';
import './ProjectList.css'


const ProjectList = () => {

  
const navigate = useNavigate();
const [show , setShow]= useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [cards] = useState([
  {
      title: 'Project-1',
      Text: 'Return 0 Software Project'
  },
  {
    title:  'Project-2',
    Text: 'MAS UI design'
},
{
    title:  'Project-3',
    Text: 'Wso2 Employee-api'
},
{
    title:  'Project-4',
    Text: 'Project Name'
},
{
    title:  'Project-5',
    Text: 'Project Name'
},
{
    title:  'Project-6',
    Text: 'Project Name'
},
{
  title:  'Project-7',
  Text: 'Project Name'
},


])

  return (
    <>
    <h1><b>Projects</b></h1> 

    <div>
      <section>
        <div className='containery'>
          
          <div className='cardsy'>
            {
              cards.map((card,i) => ( 
              <div key={i} className='cardy'>
              <h3>{card.title}</h3>
              <p>{card.Text}</p>
              <button 
              onClick={() => navigate("/dashboard")}
              className='btny'>Options</button>
                </div>
              ))
            }
             
              </div> 

        </div>
      </section>
    </div>
  
    </>
   
  );
}

export default ProjectList