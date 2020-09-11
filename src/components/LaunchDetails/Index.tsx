import React from 'react'
import { useLaunchInfoQuery } from '../../generated/graphql'
import LaunchD from './LaunchD'
import { useParams, Link } from 'react-router-dom'
import { Outlet } from 'react-router'
import NotFound from '../404'

const Index2 = () => {
    const { index } = useParams()
    const { data, error, loading } = useLaunchInfoQuery({ variables: { id: index } })
    if (loading) {
        return <div>loading...</div>
    }
    if (error || !data) {
        return <NotFound />
    }


    return <div className='con'><LaunchD data={data} />   </div>

}

export default Index2
