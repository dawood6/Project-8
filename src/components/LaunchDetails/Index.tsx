import React from 'react'
import { useLaunchInfoQuery } from '../../generated/graphql'
import LaunchD from './LaunchD'
import { useParams } from 'react-router-dom'
import NotFound from '../404'
import Loader from '../Loader'

const Index2 = () => {
    const { index } = useParams()
    const { data, error, loading } = useLaunchInfoQuery({ variables: { id: index } })
    if (loading) {
        return <Loader />
    }
    if (error || !data) {
        return <NotFound />
    }


    return <div className='con'><LaunchD data={data} />   </div>

}

export default Index2
