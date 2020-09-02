import React from 'react'
import { useLaunchesQuery } from "../../generated/graphql"
import Launch from './Launch'
const Index = () => {
    const { data, error, loading } = useLaunchesQuery();

    return (
        <div>
            {loading ? <div>Loading...</div> : null}
            {error || !data ? <div>error</div> : null}
            <Launch respData={data} />
        </div>
    )
}

export default Index
