import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'

interface Props {
    data: LaunchInfoQuery
}
const LaunchD: React.FC<Props> = ({ data }) => {
    return (
        <div>
            {!data.launch ? <div>launch 404</div> : null}
            <div>
                <div>
                    <span>Flight {data.launch?.flight_number}</span>
                </div>
                <h1>
                    {data.launch?.mission_name} - {data.launch?.rocket?.rocket_name}
                </h1>
                <p>
                    Launced From
                    {data.launch?.launch_site?.site_name}

                    in

                    {data.launch?.launch_year}
                </p>
                <p>
                    {data.launch?.details}
                </p>
            </div>
        </div>
    )
}

export default LaunchD
