import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'

interface Props {
    respData: LaunchesQuery
}
const Launch: React.FC<Props> = ({ respData }) => {
    return (
        <div>
            <h1>Launches</h1>
        </div>
    )
}

export default Launch