import React from 'react'
import { useLaunchInfoQuery } from '../../generated/graphql'
import launchD from './LaunchD'
const Index = () => {
    const { data, error, loading } = useLaunchInfoQuery({ variables: { id: "13" } })
    return (
        <div>
            {loading ? <div>Loading...</div> : null}
            {error ? <div>error</div> : null}
            {!data ? <div>please select missio9n</div> : null}
        </div>
    )
}

export default Index
