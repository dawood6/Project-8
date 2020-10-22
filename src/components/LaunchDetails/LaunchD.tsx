/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'
import './styles.css'
import logo from '../../images/bg.jpg'
interface Props {
    data: LaunchInfoQuery
}

const LaunchD: React.FC<Props> = ({ data }) => {
    console.log()
    if (data.launch.links.flickr_images.length === 0) {
        console.log("hello")
    }
    return (
        <div className='conDetails'>
            <div className="card">
                <figure>
                    {data.launch.links.flickr_images.length !== 0
                        ? (
                            <>
                                {data.launch.links.flickr_images.map((image, i) => <img className='rocket-images' src={image} key={i} alt='' />)}
                            </>
                        )
                        : (
                            <>
                                <img src={logo} alt='' />
                            </>
                        )
                    }
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
                            <button className='btn btn-launchD'><a href="#popup1 ">Want More Detals...</a></button>
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
