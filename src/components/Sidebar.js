import React from 'react'
import logo from './images/Tp.png'
import {AiFillLayout} from 'react-icons/ai'
import {AiOutlinePoweroff} from 'react-icons/ai'
import styled from 'styled-components'

const Button= styled.button`
background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before , &::after {
    content: ""; 
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;

  }
  
  &::before {
    top: 1rem;
    transform: ${props=> props.clicked ? '1.5rem' : '1rem'};
    transform: ${props=> props.clicked ? 'rotate(135deg)' : 'rotate(0)'};
  }
  &::after {
    top: 1.5rem;
    transform: ${props=> props.clicked ? '1.2rem' : '1.5rem'};
    transform: ${props=> props.clicked ? 'rotate(-135deg)' : 'rotate(0)'};
  }
`;

const div= ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);


  

const SidebarContainer = styled(div)`
  background-color: var(--black);
`;

const Sidebar = () => {

  const [click, setClick] = React.useState(false)
  const handleClick = () => setClick(!click)


  return (
    <>
      <Button clicked={click} onClick={()=>handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <div>
        <img src={logo} alt="logo" className='w-10 h-10'/>
      </div>
      <ul>
        <li>
          <img src={AiFillLayout}/>
          <span>Backlog</span>
        </li>
        <li>
          <img src={AiFillLayout}/>
          <span>Active sprint</span>
        </li>
        <li>
          <img src={AiFillLayout}/>
          <span>forum</span>
        </li>
        <li>
          <img src={AiFillLayout}/>
          <span>Report</span>
        </li>
        <li>
          <img src={AiFillLayout}/>
          <span>People</span>
        </li>
        <li>
          <img src={AiFillLayout}/>
          <span>Team</span>
        </li>
        <li>
          <img src={AiFillLayout}/>
          <span>Home</span>
        </li>
      </ul>

      <div className='bg-blue'>
        <img src={logo} className="w-10 h-10" alt="profile"/>
        <div>
          <h4>Seefa Banu</h4>
          <a href="#">view Profile</a>
        </div>

        <button>
          <img src={AiOutlinePoweroff} alt="Logout"/>
        </button>
      </div>
      </SidebarContainer>

    </>

  )
}

export default Sidebar