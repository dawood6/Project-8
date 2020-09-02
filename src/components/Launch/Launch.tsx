import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'
import { Link } from 'react-router-dom'

interface Props {
    data: LaunchesQuery
}
const Launch: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h1>Launches</h1>
            <ul>
                {data.launches && data.launches.map((launches, index) => !!launches && (
                    <li key={index}>
                        <Link to={`/${index}`}>
                            {launches.mission_name} - {launches.launch_year} ({JSON.stringify(launches.launch_success)})
                        </Link>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default Launch