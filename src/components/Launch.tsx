import React from 'react'
import { Outlet } from 'react-router'

const Launch = () => {
    return (
        <div className='con'>
            <Outlet />
        </div>
    )
}

export default Launch
