import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'

interface Props {
    respData: LaunchInfoQuery
}
const LaunchD: React.FC<Props> = ({ respData }) => {
    return (
        <div>
            {!respData.launch ? <div>launch 404</div> : null}
            <div>
                <div>
                    <span>Flight {respData.launch?.flight_number}</span>
                </div>
            </div>
        </div>
    )
}

export default LaunchD
