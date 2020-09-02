import React from 'react'
import { useLaunchInfoQuery } from '../../generated/graphql'
import LaunchD from './LaunchD'
const Index2 = () => {
    const { data, error, loading } = useLaunchInfoQuery({ variables: { id: "13" } })
    if (loading) {
        return <div>loading...</div>
    }
    if (error || !data) {
        console.log(error);
        return <div>error</div>
    }
    return <LaunchD data={data} />

}

export default Index2
