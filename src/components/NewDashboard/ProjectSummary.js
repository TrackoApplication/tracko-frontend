import React from 'react'
import './Dashboard.css'

export const ProjectSummary = () => {
  return (
    <div className='card-main flex '>
        <div className='cards'>
            <p>Sprints</p>
            <p className="text-3xl font-bold text-[#ffa600]">200</p>
        </div>
        <div className='cards'>
            <p>Epics</p>
            <p className="text-3xl font-bold text-[#ffa600]">200</p>
        </div>
        <div className='cards'>
            <p>Teams</p>
            <p className="text-3xl font-bold text-[#ffa600]">200</p>
        </div>
        <div className='cards'>
            <p>Collaborator</p>
            <p className="text-3xl font-bold text-[#ffa600]">200</p>
        </div>
        
    </div>
  )
}
