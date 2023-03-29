import React from 'react'
import Sidebar from '../SideBar/Sidebar'

export const SideLayout = ({ children }) => {

    const [inactive, setInactive] = React.useState(false);

    return (
        <div>
            <div className='App'>
                <div className='AppGlass'>
                    <Sidebar
                        onCollapse={(inactive) => {
                            setInactive(inactive);
                        }}
                    />
                    {children}
                </div>
            </div>
        </div>
    )
}
