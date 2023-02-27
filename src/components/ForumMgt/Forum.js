import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import AddForum from './AddForum';
import ForumList from './ForumList';
import ReplyForum from './ReplyForum';

const Forum = () => {
    const [inactive, setInactive] = React.useState(false);
    return (
      <div>
          <Sidebar
          onCollapse={(inactive) => {
              setInactive(inactive);
          }}
          />
          <div className={`container ${inactive ? "inactive" : ""}`}>
              <h1>Forum</h1>
          </div>

          <div>
            <AddForum/>

            {/* <ForumList/> */}
          </div>

          {/* <div>
            <ReplyForum/>
          </div> */}
      </div>
    )
}

export default Forum