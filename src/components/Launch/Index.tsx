import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './Launch'
const Index1 = () => {
    const { data, loading, error } = useLaunchesQuery()
    if (loading) {
        return <div>loading....</div>
    }
    if (error || !data) {
        return <div>error</div>
    }

    return <Launch data={data} />
}

export default Index1
