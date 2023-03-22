import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/Navbar';
import AddProject from './AddProject';
// link.rel = 'ProjectList';
import './ProjectList.css'


const ProjectList = () => {

  
const navigate = useNavigate();
const [show , setShow]= useState(false);
//const handleClose = () => setShow(false);
//const handleShow = () => setShow(true);

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
    
    <div>
    <NavBar/>
    <div className='px-5 py-3 text-left text-2xl'>
        <b>Projects</b>
      </div>
    <AddProject/>
    <section>
    <div className='ProListcontainer'>
    
               
          <div className='PLcards'>
            {
              cards.map((card,i) => ( 
              <div key={i} className='PLcard'>
              <h3>{card.title}</h3>
              <p>{card.Text}</p>
              <button className='ProListbtn'>Options</button>
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