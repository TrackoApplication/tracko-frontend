import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { GroupList } from './GroupList';

const Group = () => {
  const [inactive, setInactive] = React.useState(false);
 
  return (
        <GroupList/>
  )
}

export default Group