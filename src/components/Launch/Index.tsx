import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './Launch'
import { Outlet } from 'react-router'

const Index1 = () => {
    const { data, loading, error } = useLaunchesQuery()
    if (loading) {
        return <div>loading....</div>
    }
    if (error || !data) {
        return <div>error</div>
    }

    return <div> <Launch data={data} /> <Outlet /> </div>
}

export default Index1
