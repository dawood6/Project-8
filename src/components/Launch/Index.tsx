import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './Launch'
import NotFound from '../404'
import Footer from '../Footer'
import Loader from '../Loader'

const Index1 = () => {
    const { data, loading, error } = useLaunchesQuery()
    if (loading) {
        return <Loader />
    }
    if (error || !data) {
        return <NotFound />
    }

    return <div className='con'> <Launch data={data} /> <Footer /> </div>
}

export default Index1
