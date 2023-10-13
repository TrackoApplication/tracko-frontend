import React from 'react'
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {

    const {name,to, iconClassName,subMenus,onClick} =props;
    const [expand,setExpand] = React.useState(false);

  return (
    <li onClick={props.onClick}>
        <NavLink to={to} onClick={()=> setExpand(!expand)} className='menu-item duration-300 hover:scale-105 '>
            <div className='menu-icon'>
                <i class={iconClassName}></i>
             </div>
                <span >{name}</span>
        </NavLink>
        {
            subMenus && subMenus.length > 0 ? (
                <ul className={`sub-menu ${expand ? "active" : ""}`}>
                    {subMenus.map((menu,index) => (
                        <li key={index}>
                            <NavLink to={menu.to}>{menu.name}</NavLink>
                        </li>
                    ))}
                    </ul>
                    ) : null
        }
    </li>
            
  )
}

export default MenuItem