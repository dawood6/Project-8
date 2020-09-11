import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './Launch'
import NotFound from '../404'

const Index1 = () => {
    const { data, loading, error } = useLaunchesQuery()
    if (loading) {
        return <div>loading....</div>
    }
    if (error || !data) {
        return <NotFound />
    }

    return <div className='con'> <Launch data={data} /> </div>
}

export default Index1
