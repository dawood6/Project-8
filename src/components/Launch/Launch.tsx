import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'
import { Link } from 'react-router-dom'
import './Launch.css'
interface Props {
    data: LaunchesQuery
}
const Launch: React.FC<Props> = ({ data }) => {
    return (
        <div >
            <div className="main">
                <h1>Launches</h1>
                <ul className="cards">
                    {data.launches && data.launches.map((launches, index) => !!launches && (
                        <li key={index} className="cards_item">
                            <div className="card">
                                <div className="card_content">
                                    <h2 className="card_title">{launches.mission_name}t</h2>
                                    <p className="card_text">Launch Year:  {launches.launch_year} Launh Sucess: ({JSON.stringify(launches.launch_success)})</p>
                                    <Link to={`/Launch/${index}`}>
                                        <button className="btn card_btn">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Launch