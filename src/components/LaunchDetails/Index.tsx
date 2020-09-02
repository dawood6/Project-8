import React from 'react'
import { useLaunchInfoQuery } from '../../generated/graphql'
import LaunchD from './LaunchD'
import { useParams } from 'react-router-dom'

const Index2 = () => {
    const { index } = useParams()
    const { data, error, loading } = useLaunchInfoQuery({ variables: { id: index } })
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
