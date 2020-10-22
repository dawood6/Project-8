import { NOTFOUND } from 'dns'
import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'
import NotFound from '../404'
import './styles.css'
interface Props {
    data: LaunchInfoQuery
}

const LaunchD: React.FC<Props> = ({ data }) => {
    return (
        <div className='conDetails'>
            <div className="card">
                <figure>
                    {!!data.launch?.links && !!data.launch.links.flickr_images && (
                        <>
                            {data.launch.links.flickr_images.map((image, i) =>
                                image
                                    ? <img className='rocket-images' src={image} key={i} alt='' />
                                    : "Image Not Found")}
                        </>
                    )}
                </figure>
                <section className="details">
                    <div className="min-details">
                        <h1>{data.launch?.rocket?.rocket_name} <span>Flight # {data.launch?.flight_number}</span></h1>
                        <h1 className="price">{data.launch?.mission_name}</h1>
                    </div>
                    <div className="options">
                        <div className="options-size">
                            <h1>Details</h1>
                            <p className='pDetails'> Launched From &nbsp;
                    {data.launch?.launch_site?.site_name}
                    &nbsp;
                    in &nbsp;
                    {data.launch?.launch_year}
                            </p>
                        </div>
                        <div className="options-colors">
                            <button className='btn btn-launchD'><a href="#popup1">Want More Detals...</a></button>
                        </div>
                    </div>
                </section>
            </div>
            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Launch Details:</h2>
                    <a className="close" href="#">×</a>
                    <div className="content">
                        {
                            (data.launch?.details === "")
                                ? data.launch?.details
                                : "Data Not Found"
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LaunchD
