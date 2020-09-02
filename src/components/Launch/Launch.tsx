import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'

interface Props {
    respData: LaunchesQuery
}
const Launch: React.FC<Props> = ({ respData }) => {
    return (
        <div>
            <h1>Launches</h1>
            <ol>
                {respData.launches && respData.launches.map((launches, index) => {
                    launches && (
                        <li key={index}>
                            {launches.mission_name} - {launches.launch_year} ({launches.launch_success})
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Launch