import React from 'react'
import logo from '../images/Tp.png'
import { useState,useEffect } from 'react';
import MenuItem from './MenuItem';
import './sideBar.css'
import Avatar from 'react-avatar';
import { NavLink } from 'react-router-dom';
import {BsFillFileSpreadsheetFill} from "react-icons/bs";
import { color } from '@mui/system';
import {useNavigate} from 'react-router-dom';
import  Logout  from '../UserAuthentication/Logout'


export const menuItems = [
  {name: 'Dashboard',to: '/Dashboard', exact: true, iconClassName:'bi bi-house'},
  {name: 'Backlog', to: '/BacklogView', exact: true, iconClassName:'bi bi-x-diamond-fill'},
  {name: 'Active Sprint' , to: '/ActiveSprint', exact: true , iconClassName:'bi bi-amd'},
  {name: 'Report',to: '/Report', exact: true , iconClassName:'bi bi-body-text'},
  {name: 'Forum',to: '/ForumView', exact: true , iconClassName:'bi bi-chat-right-dots'},
  {name: 'Group',to: '/Group', exact: true , iconClassName:'bi bi-chat-right-dots'},
  {name: 'Teams',to: '/TeamView', exact: true , iconClassName:'bi bi-microsoft-teams'},
  {name: 'People',to: '/People', exact: true, iconClassName:'bi bi-people'},
  {name: 'Home',to: '/Userlist', exact: true, iconClassName:'bi bi-house'},

];

const Sidebar = (props) => {


  const handleLogoutClick = () => {
    // Call the logout function from the Logout component
    console.log(localStorage.getItem('accessToken'));
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    console.log(localStorage.getItem('accessToken'));
    navigate('/Home');
  };

  const navigate = useNavigate();


  const [inactive, setInactive] =useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    props.onCollapse(inactive);
 
   }, [inactive]);

   
 

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`} >
        <div className='top-section'>
            <div className='logo'>
              <img src={logo} alt='logo' />
          </div>
          <div
          onClick={() => {setInactive(!inactive);}}
          className='toggle-menu-btn '>
            {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
          </div>

          <div className='search-controller'>
            <button 
            className='search-btn'>
              <i class="bi bi-search "></i>
            </button>
              
              <input type='text' placeholder='Search' />
          </div>

          <div className='project-wrapper'>
          <div className='project-icon'><BsFillFileSpreadsheetFill style={{ fontSize: '3em' , color:'rgb(1, 255, 239)' }} />
          </div>
          <div>
          <p style={{fontSize:"20px", color:"white" }}>Return0</p>
          <p style={{fontSize:"10px", color:"white" }}>PID_20</p>

          </div>
          
          </div>

          {/* <div className='divider'></div> */}

          <div className='main-menu'>
            <ul>

              {menuItems.map((menuItem, index) => (
                <MenuItem 
                key={index} 
                  name={menuItem.name} 
                  to={menuItem.to}
                 
                  iconClassName={menuItem.iconClassName}
                  subMenus={menuItem.subMenus || []}
                  onClick={() => {
                    if(inactive){
                      setInactive(false);}
                    }}
                /> 
              ))}

              {/* <li>
                <a className='menu-item'>
                  <div className='menu-icon'>
                  <i class="bi bi-x-diamond-fill"></i>
                  </div>
                  <span>Backlog</span>
                  </a>
              </li>
              <li>
                <a className='menu-item'>
                  <div className='menu-icon'>
                    <i class="bi bi-x-diamond-fill"></i>
                  </div>
                    <span>Active Sprint</span>
                </a>
              </li>
              <li>
                <a className='menu-item'>
                  <div className='menu-icon'>
                    <i class="bi bi-x-diamond-fill"></i>
                  </div>
                    <span>Report</span>
                </a>
              </li>
              <li>
                <a className='menu-item'>
                  <div className='menu-icon'>
                    <i class="bi bi-x-diamond-fill"></i>
                  </div>
                    <span>Forum</span>
                </a>
              </li>
              <li>
                <a className='menu-item'>
                  <div className='menu-icon'>
                    <i class="bi bi-x-diamond-fill"></i>
                  </div>
                    <span>Teams</span>
                </a>
              </li>
              <li>
                <a className='menu-item'>
                  <div className='menu-icon'>
                    <i class="bi bi-x-diamond-fill"></i>
                  </div>
                    <span>People</span>
                  </a>
              </li>
              <li>
                <a className='menu-item'>
                  <div className='menu-icon'>
                    <i class="bi bi-x-diamond-fill"></i>
                  </div>
                    <span>Home</span>
                </a>
              </li> */}
              
            </ul>
          </div>

          <div className='side-menu-footer'>
            <button onClick={handleLogoutClick}>
              <div className='avatar'>
                <i class="bi bi-power "></i>
              </div>
              <div className='user-info inline-block'>
                <h5>Logout</h5>
              </div>
            </button>
          </div>

      </div>
    </div>
  );
}

export default Sidebar