import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'

interface Props {
    data: LaunchesQuery
}
const Launch: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h1>Launches</h1>
            <ol>
                {data.launches && data.launches.map((launches, index) => !!launches && (
                    <li key={index}>
                        {launches.mission_name} - {launches.launch_year} ({JSON.stringify(launches.launch_success)})
                    </li>
                )
                )}
            </ol>
        </div>
    )
}

export default Launch